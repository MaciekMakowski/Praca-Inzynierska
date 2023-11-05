import { Box, Grid, Typography, useTheme } from "@mui/material";

import GuestVisitHistory from "./guestVisitHistory";
import shadows from "@mui/material/styles/shadows";
import { useParams } from "react-router";

type PersonDetails = {
  [key: string]: string;
};

const personData: PersonDetails = {
  Imię: "Jan",
  Nazwisko: "Kowalski",
  Pesel: "12345678901",
  "Data urodzenia": "01.01.2000",
  Płeć: "Mężczyzna",
  "Numer telefonu": "123456789",
  "Adres email": "adam@nowak.pl",
  Miasto: "Olsztyn",
  "Kod pocztowy": "10-123",
  Adres: "ul. Nowa 1",
};

const PersonDetails = () => {
  const theme = useTheme();
  const { type, id } = useParams();

  return (
    <>
      <Typography variant="h6" color={theme.palette.text.primary}>
        Profil {type == "guest" ? "gościa" : "wolontariusza"} o id {id}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            backgroundColor: theme.palette.background.adminField,
            padding: "1rem",
            boxSizing: "border-box",
            justifyContent: "space-around",
            boxShadow: shadows[3],
          }}
        >
          {Object.keys(personData).map((key) => {
            return (
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  {key}
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={"center"}
                  color={theme.palette.text.primary}
                >
                  {personData[key]}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <GuestVisitHistory/>
      </Box>
    </>
  );
};

export default PersonDetails;
