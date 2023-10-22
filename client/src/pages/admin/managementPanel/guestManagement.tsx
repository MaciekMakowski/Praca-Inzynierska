import { Box, Typography, useTheme } from "@mui/material";
import PersonsList from "../../../components/managementPanel/personsList";
import AddPersonForm from "../../../components/managementPanel/addPersonForm";

const GuestManagement = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: "1700px",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingX: "1rem",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          textAlign={"start"}
          color={theme.palette.text.primary}
        >
          Zarządzanie gośćmi schroniska
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          gap: "1rem",
        }}
      >
        <AddPersonForm title="Dodaj gościa" />
        <PersonsList />
      </Box>
    </Box>
  );
};

export default GuestManagement;
