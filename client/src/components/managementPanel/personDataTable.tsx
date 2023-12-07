import { Box, Typography, useTheme } from "@mui/material";

import shadows from "@mui/material/styles/shadows";
import { PersonType } from "../../utils/types/basicTypes";

const PersonData = [
  "Imię",
  "Nazwisko",
  "Płeć",
  "Data urodzin",
  "Numer telefonu",
  "Email",
  "PESEL",
  "Miasto",
  "Kod pocztowy",
  "Adres",
];

const PersonDataTable = (props: PersonType) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: theme.palette.background.adminField,
        padding: "1rem",
        boxSizing: "border-box",
        justifyContent: "space-around",
        boxShadow: shadows[3],
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {Object.keys(props.attributes).map((key: string, index) => {
        return (
          <Box key={index}>
            <Typography
              variant="body1"
              fontWeight={600}
              color={theme.palette.text.primary}
            >
              {PersonData[index]}
            </Typography>
            <Typography
              variant="body1"
              textAlign={{ xs: "start", md: "center" }}
              color={theme.palette.text.primary}
            >
              {props.attributes[key]}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default PersonDataTable;
