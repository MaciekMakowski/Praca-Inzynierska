import { Box, Button, Typography, useTheme } from "@mui/material";

import EditIsolationModal from "../../../components/managementPanel/editIsolationModal";
import { isolationDataDetails } from "../../../utils/mockups/adminMenu";
import { useNavigate } from "react-router";
import { useState } from "react";

const IsolationDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Szczegóły izolacji
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
            Izolacja zwierzęcia
            <Typography variant="body1"> {isolationDataDetails.petId}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Data rozpoczęcia
            <Typography variant="body1"> {isolationDataDetails.startDate}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Data zakończenia
            <Typography variant="body1"> {isolationDataDetails.endDate}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Powód
            <Typography variant="body1"> {isolationDataDetails.reason}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Status
            <Typography variant="body1"> {isolationDataDetails.status}</Typography>
          </Typography>
          <Box>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Edytuj
            </Button>
          </Box>
        </Box>
      </Box>
      <EditIsolationModal setOpen={setOpen} open={open} data={isolationDataDetails}/>
    </>
  );
};

export default IsolationDetails;
