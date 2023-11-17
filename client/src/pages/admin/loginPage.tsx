import {
  Box,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { ErrorInput } from "../../utils/types/errorInput";
import { LogIn } from "../../utils/services/posts";
import { User } from "../../utils/types/basicTypes";
import back from "../../img/home/back.png";
import { handleTextChange } from "../../utils/functions/handlers";
import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";
import { validateForm } from "../../utils/functions/validators";

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    attributes:{
        login: "",
        password: "",
    }
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
    validateForm(user.attributes, setErrorList).then((res) => {
      if (res) {
        LogIn(user.attributes.login, user.attributes.password).then((res) => {
          if (res) {
            Cookies.remove("token", {
                path: "/",
            })
            Cookies.set("token", res, {
              sameSite:'none',
              secure: true,
              expires: 2,
              path: "/",
            });
            navigateTo(navigate, "/admin/panel")
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
        <Button variant="contained" color="primary" onClick={() => login()}>
          Zaloguj
        </Button>
        <Typography variant="caption">Zapomniałeś hasła?</Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
