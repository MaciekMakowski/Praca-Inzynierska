import { Box, Typography, useTheme } from "@mui/material";

import AddPersonForm from "../../../components/managementPanel/addPersonForm";
import PersonsList from "../../../components/managementPanel/personsList";

const GuestManagement = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
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
          flexDirection: { xs: "column", lg: "row"},
          alignItems: "center",
        }}
      >
        <AddPersonForm title="Dodaj gościa" />
        <PersonsList type="guest"/>
      </Box>
    </>
  );
};

export default GuestManagement;
