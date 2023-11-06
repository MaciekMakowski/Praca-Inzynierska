import { Box, Button, Typography, useTheme } from "@mui/material";

import EditIsolationModal from "../../../components/managementPanel/editIsolationModal";
import { useState } from "react";

const PetDiseaseDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Szczegóły choroby zwierzęcia
      </Typography>
      <Box
        sx={{
          height: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Choroba zwierzęcia
            <Typography variant="body1"> Imie zwierzęcia</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Data rozpoczęcia
            <Typography variant="body1"> 20-03-2021</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Data zakończenia
            <Typography variant="body1"> brak</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Objawy
            <Typography variant="body1"> Jakieś tam objawy</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Status
            <Typography variant="body1"> Zakończona</Typography>
          </Typography>
          <Box>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Edytuj
            </Button>
          </Box>
        </Box>
      </Box>
      <EditIsolationModal setOpen={setOpen} open={open} />
    </>
  );
};

export default PetDiseaseDetails;
