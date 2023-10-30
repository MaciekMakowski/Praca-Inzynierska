import {
  Box,
  Button,
  Grid,
  Pagination,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import PersonsListItem from "./personsListItem";

const PersonsList = () => {
  const theme = useTheme();

  const returnItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++)
      items.push(<PersonsListItem key={i} color={i % 2 == 0} />);
    return items;
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        height: "100%",
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: theme.shadows[3],
        width: {xs:'none', md:'700px' ,lg:'100%'},
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button variant="contained">Szukaj</Button>
          <TextField size="small" label="Wyszukaj" />
        </Box>
      </Box>
      <Box
        sx={{
          overflowX:'auto',
          overflowY:'clip'
        }}
      >
        <Grid container spacing={5}        
         sx={{
          width: {xs:'1000px', lg:'100%'},
        }}>
        <Grid item xs={1}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Numer
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Imię
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Nazwisko
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Data urodzenia
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Numer telefonu
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Miasto
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Kod pocz.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Adres
          </Typography>
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: {xs:'60vh', lg:'100%'},
          width: {xs:'1000px', lg:'100%'},
          overflowY:'auto',
        }}
      >
        {returnItems()}
      </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          <Pagination count={10} size="small" />
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonsList;
