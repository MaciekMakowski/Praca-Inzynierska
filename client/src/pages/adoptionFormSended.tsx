import { Box, Container, useTheme } from "@mui/material";

import back from "../img/home/back.png";

const AdoptionFormSended = () => {
    const theme = useTheme();
    return(
        <Container
          sx={{
            backgroundImage: `url(${back})`,
            backgroundSize: "contain",
            color: theme.palette.text.primary,
          }}
        >
            <Box
                sx={{
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                }}
            >

            </Box>
        </Container>
    )
}

export default AdoptionFormSended;