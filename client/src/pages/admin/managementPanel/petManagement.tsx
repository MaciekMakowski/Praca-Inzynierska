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
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { AllInbox } from "@mui/icons-material";

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
                <Box
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                    variant="subtitle2"
                    color={theme.palette.text.primary}
                    fontWeight={600}
                  >
                    Opis
                  </Typography>
                  <IconButton size="small">
                    <EditIcon />
                  </IconButton>

                  </Box>
                  <Typography variant="caption">
                  Puszek to uroczy mały kundelek o kręconym futerku. Jego futerko ma piękny, brązowy kolor, który sprawia, że wygląda jak mały misiek. Puszek uwielbia bawić się piłką i skakać wesoło po podwórku. Jest niezwykle przyjacielski i zawsze gotów na zabawę z dziećmi. W nocy Puszek chętnie kładzie się na poduszce obok swojego właściciela, trzymając go w ciepłym towarzystwie. To mały, kochany psiak, który wnosi mnóstwo radości do życia swoich opiekunów. Puszek to także bardzo bystry piesek, który szybko uczy się nowych sztuczek i rozumie polecenia swoich właścicieli. Jego okrągłe, czekoladowe oczy potrafią rozczulić każdego, kto spojrzy mu w twarz. To mały kundelek o ogromnym sercu, gotów do oddania miłości i wierności każdego dnia.
                  </Typography>
                  
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
            width: "50%",
            height: "100%",
            textAlign: "center",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}
          >
          <Button
            variant="outlined"
            sx={{
              width:'120px',
              height:'120px',
            }}
          >
              <Box
                sx={{
                  width:'100%',
                  height:'100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={theme.palette.text.primary}
                >
                  Rozpocznij Adopcję
                </Typography>
                <AddHomeIcon
                  sx={{
                    width:'50px',
                    height:'50px',
                  }}
                />
              </Box>
            </Button>
            <Button
            variant="outlined"
            sx={{
              width:'120px',
              height:'120px',
            }}
          >
              <Box
                sx={{
                  width:'100%',
                  height:'100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={theme.palette.text.primary}
                >
                  Dodaj Izolacje
                </Typography>
                <BorderAllIcon 
                  sx={{
                    width:'50px',
                    height:'50px',
                  }}
                />
              </Box>
            </Button>
            <Button
            variant="outlined"
            sx={{
              width:'120px',
              height:'120px',
              color:theme.palette.error.main,
              borderColor:theme.palette.error.main,
            }}
            disabled
          >
              <Box
                sx={{
                  width:'100%',
                  height:'100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={theme.palette.error.main}
                >
                  Zakończ Izolacje
                </Typography>
                <BorderAllIcon 
                  sx={{
                    width:'50px',
                    height:'50px',
                  }}
                />
              </Box>
            </Button>
            <Button
            variant="outlined"
            sx={{
              width:'120px',
              height:'120px',
            }}
          >
              <Box
                sx={{
                  width:'100%',
                  height:'100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={theme.palette.text.primary}
                >
                  Dodaj chorobę
                </Typography>
                <CoronavirusIcon 
                  sx={{
                    width:'50px',
                    height:'50px',
                  }}
                />
              </Box>
            </Button>
            <Button
            variant="outlined"
            sx={{
              width:'120px',
              height:'120px',
              color:theme.palette.error.main,
              borderColor:theme.palette.error.main,
            }}
            disabled
          >
              <Box
                sx={{
                  width:'100%',
                  height:'100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={theme.palette.error.main}
                >
                  Zakończ chorobę
                </Typography>
                <CoronavirusIcon 
                  sx={{
                    width:'50px',
                    height:'50px',
                  }}
                />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PetManagement;
