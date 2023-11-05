import { Box, Grid, Typography, useTheme } from "@mui/material";

import EventNoteIcon from '@mui/icons-material/EventNote';
import GuestVisitHistory from "../../../components/managementPanel/guestVisitHistory";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PersonOffIcon from '@mui/icons-material/PersonOff';
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
      <Box height={"10%"}>
        <Typography variant="h4" color={theme.palette.text.primary}>
          Profil {type == "guest" ? "gościa" : "wolontariusza"} o id {id}
        </Typography>
      </Box>

      <Box
        sx={{
          height:'90%',
          display:'flex',
          justifyContent:'start',
          flexDirection: "column",
          gap:'1rem',
          width:'100%'
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
        <Box
          sx={{
            height: "85%",
            display: "flex",
            gap: "1rem",
            flexDirection: { xs: "column", md: "row"}
          }}
        >
          <GuestVisitHistory />
          <ManagementButton name="Zarejestruj wejście" ico={EventNoteIcon} disabled={false} foo={() => null}/>
          <ManagementButton name="Zarejestruj wyjście" ico={PersonOffIcon} disabled foo={() => null}/>
        </Box>
      </Box>
    </>
  );
};

export default PersonDetails;
