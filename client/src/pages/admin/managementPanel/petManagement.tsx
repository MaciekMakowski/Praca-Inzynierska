import {
  Box,
  ImageList,
  Typography,
  useTheme,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import EditIcon from "@mui/icons-material/Edit";
import { AnimalType } from "../../../utils/types/basicTypes";
import PetManagementList from "../../../components/managmentPanel/petManagementList";

const data: AnimalType = {
  number: 1234,
  name: "Puszek",
  findPlace: "Las Bartąg",
  race: "Kundel",
  weight: 6.42,
  sex: "Samiec",
  species: "Pies",
  birthDate: "20-09-2022",
};

const PetManagement = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minWidth: "1700px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        paddingX: "1rem",
        paddingBottom: "1rem",
        justifyContent: "flex-start",
        gap: "1rem",
      }}
    >
      <Box>
        <Typography variant="h5" color={theme.palette.text.primary}>
          Profil zwierzęcia: Puszek
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Box
              sx={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
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
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
                        12-08-2022
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: theme.palette.background.adminField,
                  borderRadius: "1rem",
                  padding: "0.5rem",
                  boxShadow: shadows[3],
                }}
              >
                <Box
                  sx={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color={theme.palette.text.primary}
                    >
                      Status:
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.text.primary}
                    >
                      Do adopcji
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color={theme.palette.text.primary}
                    >
                      Izolowany:
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.text.primary}
                    >
                      Nie
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color={theme.palette.text.primary}
                    >
                      Chory:
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.text.primary}
                    >
                      Nie
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color={theme.palette.text.primary}
                    >
                      Izolowany:
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.text.primary}
                    >
                      costam
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: theme.palette.background.adminField,
              borderRadius: "1rem",
              padding: "0.5rem",
              boxSizing: "border-box",
              boxShadow: shadows[3],
            }}
          >
            <Typography
              variant="subtitle1"
              color={theme.palette.text.primary}
              p={0}
            >
              Zdjęcia
            </Typography>
            <ImageList
              sx={{
                boxSizing: "border-box",
                height: "100%",
                m: 0,
              }}
            >
              <Button
                sx={{
                  width: "200px",
                  height: "100px",
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography variant="h3">+</Typography>
              </Button>
            </ImageList>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "50%",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            width: "50%",
            height: "100%",
          }}
        >
          <PetManagementList title="Historia Izolacji" />
          <PetManagementList title="Historia Chorób" />
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.background.adminField,
            width: "50%",
            height: "100%",
            textAlign: "center",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
            borderRadius: "1rem",
            boxShadow: theme.shadows[3],
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PetManagement;
