import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import EditIcon from "@mui/icons-material/Edit";

const PetManagementInfo = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "50%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.adminField,
        borderRadius: "1rem",
        boxSizing: "border-box",
        padding: "1rem",
        boxShadow: shadows[3],
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: 0,
        }}
      >
        <IconButton>
          <EditIcon />
        </IconButton>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              #Numer
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              #12313
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Imię
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Puszek
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Miejsce Znalezienia
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Lasek
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Rasa
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Kundel
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Waga
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              8 kg
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Płeć
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Samiec
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Gatunek
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              Pies
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Data urodzenia
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              12-08-2022
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetManagementInfo;
