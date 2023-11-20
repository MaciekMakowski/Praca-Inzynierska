import { Box, Typography, useTheme } from "@mui/material";

import AddPersonForm from "../../../components/managementPanel/addPersonForm";
import PersonsList from "../../../components/managementPanel/personsList";
import { useState } from "react";

const GuestManagement = () => {
  const theme = useTheme();
  const [refresh,setRefresh] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
          fontWeight={600}
        >
          Zarządzanie gośćmi schroniska
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          gap: "1rem",
          flexDirection: { xs: "column", xl: "row" },
          alignItems: "center",
        }}
      >
        <AddPersonForm title="Dodaj gościa" type="guests" setRefresh={setRefresh} isNew />
        <PersonsList type="guest" refresh={refresh} setRefresh={setRefresh} />
      </Box>
    </>
  );
};

export default GuestManagement;
