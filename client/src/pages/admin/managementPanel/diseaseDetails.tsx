import { Box, Button, Typography, useTheme } from "@mui/material";

import AddDiseaseForm from "../../../components/managementPanel/addDiseaseForm";
import EditDiseaseModal from "../../../components/managementPanel/editDiseaseModal";
import { diseaseDataDetails } from "../../../utils/mockups/adminMenu";
import { useState } from "react";

const DiseaseDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Szczegóły choroby
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
            Nazwa choroby:
            <Typography variant="body1"> {diseaseDataDetails.name}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Objawy:
            <Typography variant="body1">
              {" "}
              {diseaseDataDetails.description}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Zalecane leczenie:
            <Typography variant="body1">
              {" "}
              {diseaseDataDetails.treatment}
            </Typography>
          </Typography>
          <Box>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Edytuj
            </Button>
          </Box>
        </Box>
      </Box>
      <EditDiseaseModal open={open} setOpen={setOpen} data={diseaseDataDetails}/>
    </>
  );
};

export default DiseaseDetails;
