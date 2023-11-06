import { Box, Typography, useTheme } from "@mui/material";

import AddDiseaseForm from "../../../components/managementPanel/addDiseaseForm";
import DiseaseList from "../../../components/managementPanel/diseaseList";
import IllAnimalList from "../../../components/managementPanel/illAnimalList";

const DiseaseManagement = () => {
  const theme = useTheme();

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
        <AddDiseaseForm />
        <DiseaseList />
        <IllAnimalList />
      </Box>
    </>
  );
};

export default DiseaseManagement;
