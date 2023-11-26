import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router";

import back from "../img/home/back.png";
import { navigateTo } from "../utils/functions/navigators";
import thanks from "../img/thanks/thanks.png";

const AdoptionFormSended = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { name, animal, id } = useParams();
  return (
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
          alignItems: "center",
          backgroundColor: theme.palette.background.adminField,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Gratulacje {name}! Podjąłeś decyzję o adopcji {animal}!
        </Typography>
        <Box
          sx={{
            width: "250px",
            height: "250px",
            backgroundImage: `url(${thanks})`,
            backgroundSize: "contain",
          }}
        />
        <Typography variant="h5" sx={{ textAlign: "center" }}>
        ID formularza: {id}
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }}> 
        Prosimy o zachowanie ID formularza w celu identyfikacji podczas kontaktu z nami.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          width: "100%",
          height: "30px",
        }}
      />
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.adminField,
        }}
      >
        <Typography variant="h4" fontWeight={600} sx={{ textAlign: "center" }}>
          Dziękujemy {name} za wypełnienie formularza adopcyjnego!
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Skontaktujemy się z Tobą w najbliższym czasie.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Prosimy o cierpliwość oraz czujność w skrzynce odbiorczej.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Pozdrawiamy!
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {animal} już nie może się doczekać spotkania z Tobą!
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.light,
          width: "100%",
          height: "30px",
        }}
      />
      <Box
        sx={{
          padding: "1rem",
          boxSizing: "border-box",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.adminField,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Jeśli chciałbyś pomóc naszemu schornisku zapraszamy do zakładki "Nasze
          potrzeby"
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Jeśli chcesz wrócić do strony głównej kliknij w poniższy przycisk
        </Typography>
        <Button variant="contained" onClick={() => navigateTo(navigate, '/')}>Wróć do strony głównej</Button>
      </Box>
    </Container>
  );
};

export default AdoptionFormSended;
