import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";

import AnimalsFilter from "../components/charts/animalsFilter";
import back from "../img/home/back.png";

const OurAnimals = () => {
  const theme = useTheme();
  return (
    <>
      <Container
        sx={{
          backgroundImage: `url(${back})`,
          backgroundSize: "contain",
        }}
      >
        <Box
          sx={{
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              color={theme.palette.text.primary}
              textAlign={"center"}
            >
              Nasi podopieczni
            </Typography>
            <AnimalsFilter />
            
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default OurAnimals;
