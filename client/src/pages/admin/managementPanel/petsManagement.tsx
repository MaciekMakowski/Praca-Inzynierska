import { Box, Typography, useTheme } from "@mui/material";

import AddAnimalForm from "../../../components/managementPanel/addAnimalForm";
import AnimalList from "../../../components/managementPanel/animalList";
import { useState } from "react";

const PetsManagement = () => {
  const theme = useTheme();
  const [refreshList, setRefreshList] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
          fontWeight={600}
        >
          Zarządzanie zwierzętami
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          gap: "1rem",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <AddAnimalForm setRefresh={setRefreshList} isNew={true}/>
        <AnimalList setRefreshList={setRefreshList} refreshList={refreshList}/>
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
