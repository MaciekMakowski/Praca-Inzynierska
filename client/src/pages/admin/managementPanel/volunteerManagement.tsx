import { Box, Typography, useTheme } from "@mui/material";

import AddPersonForm from "../../../components/managementPanel/addPersonForm";
import PersonList from "../../../components/managementPanel/personsList";

const VolunteerManagement = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Zarządzanie wolontariuszami
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          gap: "1rem",
          width: "100%",
          flexDirection: { xs: "column", xl: "row"},
          alignItems:"center"
        }}
      >
        <AddPersonForm title="Dodaj wolontariusza" />
        <PersonList />
      </Box>
    </>
  );
};

export default VolunteerManagement;
