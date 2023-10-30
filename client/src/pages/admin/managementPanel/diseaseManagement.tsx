import { Box, Typography, useTheme } from "@mui/material";

import AddDiseaseForm from "../../../components/managementPanel/addDiseaseForm";
import AnimalList from "../../../components/managementPanel/animalList";
import DiseaseList from "../../../components/managementPanel/diseaseList";

const DiseaseManagement = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Zarządzanie chorobami
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          gap: "1rem",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <AddDiseaseForm />
        <DiseaseList />
        <AnimalList />
      </Box>
    </>
  );
};

export default DiseaseManagement;
