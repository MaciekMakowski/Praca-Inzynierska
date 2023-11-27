import { Box, Typography, useTheme } from "@mui/material";

import AddPersonForm from "../../../components/managementPanel/forms/addPersonForm";
import PersonList from "../../../components/managementPanel/lists/personsList";
import { useState } from "react";

const VolunteerManagement = () => {
  const theme = useTheme();
  const [refresh, setRefresh] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
          fontWeight={600}
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
        <AddPersonForm title="Dodaj wolontariusza" type="volunteers" setRefresh={setRefresh} isNew buttonText="dodaj"/>
        <PersonList type="volunteer" refresh={refresh} setRefresh={setRefresh}/>
      </Box>
    </>
  );
};

export default VolunteerManagement;
