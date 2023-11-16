import {
  Box,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import Cookies from "js-cookie";
import { ErrorInput } from "../../utils/types/errorInput";
import { LogIn } from "../../utils/services/posts";
import { User } from "../../utils/types/basicTypes";
import back from "../../img/home/back.png";
import { handleTextChange } from "../../utils/functions/handlers";
import { useState } from "react";
import { validateForm } from "../../utils/functions/validators";

const LoginPage = () => {
  const theme = useTheme();
  const [user, setUser] = useState<User>({
    login: "",
    password: "",
  });
  const [ErrorList, setErrorList] = useState<ErrorInput>({
    login: {
      status: false,
    },
    password: {
      status: false,
    },
  });

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setUser);
  };

  const login = () => {
    validateForm(user, setErrorList).then((res) => {
      if (res) {
        LogIn(user.login, user.password).then((res) => {
          if (res) {
            Cookies.set("token", res, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
            });
          } else {
            alert("Coś poszło nie tak");
          }
        });
      }
    });
  };

  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${back})`,
        backgroundSize: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "300px", md: "400px" },
          height: { xs: "400px", md: "500px" },
          bgcolor: theme.palette.background.secondary,
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box sx={{ width: "100%" }} textAlign={"center"}>
          <Typography variant="h5" color={theme.palette.text.primary}>
            Panel Administracyjny
          </Typography>
        </Box>
        <TextField
          variant="outlined"
          focused
          label="Login"
          name="login"
          onChange={textChange}
          error={ErrorList.login.status}
        />
        <TextField
          type="password"
          variant="outlined"
          focused
          label="Password"
          name="password"
          onChange={textChange}
          error={ErrorList.password.status}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox sx={{ color: theme.palette.primary.main }} />
          <Typography variant="button">Pamiętaj login</Typography>
        </Box>
        <Button variant="contained" color="primary">
          Zaloguj
        </Button>
        <Typography variant="caption">Zapomniałeś hasła?</Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
