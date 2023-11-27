import { Box, Typography, useTheme } from "@mui/material";

import AddDiseaseForm from "../../../components/managementPanel/forms/addDiseaseForm";
import DiseaseList from "../../../components/managementPanel/lists/diseaseList";
import IllAnimalList from "../../../components/managementPanel/lists/illAnimalList";
import { useState } from "react";

const DiseaseManagement = () => {
  const theme = useTheme();
  const [refreshList, setRefreshList] = useState(true);
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
          fontWeight={600}
        >
          Zarządzanie chorobami
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          gap: "1rem",
          flexDirection: { xs: "column", xl: "row" },
        }}
      >
        <AddDiseaseForm setRefresh={setRefreshList} isNew={true} />
        <DiseaseList
          refreshList={refreshList}
          setRefreshList={setRefreshList}
        />
        <IllAnimalList />
      </Box>
    </>
  );
};

export default DiseaseManagement;
