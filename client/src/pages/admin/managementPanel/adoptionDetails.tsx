import { Box, Button, Typography, useTheme } from "@mui/material";

import { navigateTo } from "../../../utils/functions/navigators";
import shadows from "@mui/material/styles/shadows";
import { useNavigate } from "react-router";

const AdoptionDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Szczegóły Adopcji
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "fit-content",
            backgroundColor: theme.palette.background.adminField,
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: shadows[3],
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color={theme.palette.text.primary}
            >
              Założenie Wniosku
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Osoba Składająca Wniosek:{" "}
              <span style={{ fontWeight: 600 }}>Jan Kowalski</span>
              <Typography variant="body2">
                Numer osoby składającej wniosek:{" "}
                <span style={{ fontWeight: 600 }}>1242</span>
              </Typography>
            </Typography>
            <Button
              onClick={() =>
                navigateTo(
                  navigate,
                  "/admin/management/personDetails/guest/1242"
                )
              }
            >
              Przejdz do profilu
            </Button>
          </Box>
          <Box>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Wniosek dotyczy zwierzęcia:{" "}
              <span style={{ fontWeight: 600 }}>Puszek</span>
              <Typography variant="body2">
                Numer zwierzęcia: <span style={{ fontWeight: 600 }}>68</span>
              </Typography>
            </Typography>
            <Button
              onClick={() =>
                navigateTo(navigate, "/admin/management/animals/68")
              }
            >
              Przejdz do profilu
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdoptionDetails;
