import { Box, Typography, useTheme } from "@mui/material";

import AdoptionList from "../../../components/managementPanel/adoptionList";
import { useState } from "react";

const AdoptionsManagement = () => {
  const theme = useTheme();
  const [refreshList, setRefreshList] = useState(false);

  return (
    <>
      <Typography
        variant="h4"
        textAlign={"center"}
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        Zarządzanie Adopcjami
      </Typography>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          justifyContent: "start",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <AdoptionList setRefreshList={setRefreshList} refreshList={refreshList}/>
      </Box>
    </>
  );
};

export default AdoptionsManagement;
