import { Box, IconButton, Typography, useTheme } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import EditIcon from "@mui/icons-material/Edit";
const PetManagementDesc = () => {
  const theme = useTheme();

  return (
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
          <Typography variant="body1" color={theme.palette.text.primary}>
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
          <Typography variant="body1" color={theme.palette.text.primary}>
            Nie
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Powód izolacji:
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Brak
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
          <Typography variant="body1" color={theme.palette.text.primary}>
            Nie
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
          Puszek to uroczy mały kundelek o kręconym futerku. Jego futerko ma
          piękny, brązowy kolor, który sprawia, że wygląda jak mały misiek.
          Puszek uwielbia bawić się piłką i skakać wesoło po podwórku. Jest
          niezwykle przyjacielski i zawsze gotów na zabawę z dziećmi. W nocy
          Puszek chętnie kładzie się na poduszce obok swojego właściciela,
          trzymając go w ciepłym towarzystwie. To mały, kochany psiak, który
          wnosi mnóstwo radości do życia swoich opiekunów. Puszek to także
          bardzo bystry piesek, który szybko uczy się nowych sztuczek i rozumie
          polecenia swoich właścicieli. Jego okrągłe, czekoladowe oczy potrafią
          rozczulić każdego, kto spojrzy mu w twarz. To mały kundelek o ogromnym
          sercu, gotów do oddania miłości i wierności każdego dnia.
        </Typography>
      </Box>
    </Box>
  );
};

export default PetManagementDesc;
