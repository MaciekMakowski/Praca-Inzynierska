import { Box, Typography, useTheme } from "@mui/material";

import AddAnimalForm from "../../../components/managementPanel/addAnimalForm";
import AnimalList from "../../../components/managementPanel/AnimalList";

const PetsManagement = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Zarządzanie zwierzętami
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          gap: "1rem",
          flexDirection: { xs: "column", md: "row"}
        }}
      >
        <AddAnimalForm />
        <AnimalList />
        <Box
          sx={{
            width: "40%",
          }}
        ></Box>
      </Box>
      </>
  );
};

export default PetsManagement;
