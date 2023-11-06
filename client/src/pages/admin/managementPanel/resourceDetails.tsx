import { Box, Button, Typography, useTheme } from "@mui/material";

import { useState } from "react";

const ResourceDetails = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    return(
        <>
        <Typography variant="h4" color={theme.palette.text.primary}>
        Szczegóły zasobu
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
          Nazwa zasobu
          <Typography variant="body1"> Whiskas</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Rodzaj zasobu
            <Typography variant="body1"> Jedzenie</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Podkategoria
            <Typography variant="body1"> Karma sucha</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Ilość
            <Typography variant="body1"> 10</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Jednostka
            <Typography variant="body1"> Kg</Typography>
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight={600}>
            Data ważności
            <Typography variant="body1"> 10-09-03</Typography>
        </Typography>
        <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
            Edytuj
        </Button>
        </Box>
        </Box>

      </Box>
        </>
    )
}

export default ResourceDetails;