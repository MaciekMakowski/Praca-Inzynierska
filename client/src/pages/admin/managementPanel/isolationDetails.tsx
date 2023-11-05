import { Box, Button, Typography, useTheme } from "@mui/material";

import EditIsolationModal from "../../../components/managementPanel/editIsolationModal";
import { navigateTo } from "../../../utils/functions/navigators";
import { useNavigate } from "react-router";
import { useState } from "react";

const IsolationDetails = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    return(
        <>
        <Typography variant="h4" color={theme.palette.text.primary}>
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
                gap:'1rem',
            }}
        >
        <Typography variant="h6" color={theme.palette.text.primary} fontWeight={600}>
          Izolacja zwierzęcia
          <Typography variant="body1"> Imie zwierzęcia</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Data rozpoczęcia
            <Typography variant="body1"> 20-03-2021</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Data zakończenia
            <Typography variant="body1"> brak</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Powód
            <Typography variant="body1"> Jakiś tam powód</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
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
        <EditIsolationModal setOpen={setOpen} open={open}/>
        </>
    )
}

export default IsolationDetails;