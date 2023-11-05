import { Box, Button, Typography, useTheme } from "@mui/material";

import { navigateTo } from "../../../utils/functions/navigators";
import { useNavigate } from "react-router";

const IsolationDetails = () => {
    const theme = useTheme();
    const navigate = useNavigate();
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
        <Box>
        <Button variant="contained" onClick={() => navigateTo(navigate, '/admin/management/animals/1')}>
            Edytuj
        </Button>
        </Box>
        </Box>

      </Box>
        
        </>
    )
}

export default IsolationDetails;