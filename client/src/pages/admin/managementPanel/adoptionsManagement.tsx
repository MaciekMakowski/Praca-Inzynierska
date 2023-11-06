import { Box, Typography, useTheme } from "@mui/material";

import AdoptionList from "../../../components/managementPanel/adoptionList";

const AdoptionsManagement = () => {
  const theme = useTheme();

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
        <AdoptionList />
      </Box>
    </>
  );
};

export default AdoptionsManagement;
