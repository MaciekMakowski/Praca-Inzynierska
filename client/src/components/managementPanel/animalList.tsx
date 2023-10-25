import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useTheme,
  Typography,
  Grid,
  Pagination,
} from "@mui/material";
import AnimalListItem from "./animalListItem";

const AnimalList = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState(0);

  const handleChangeFilter = (value: number) => {
    if (value === filter) setFilter(0);
    if (value !== filter) setFilter(value);
  };

  const returnItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++)
      items.push(<AnimalListItem key={i} color={i % 2 == 0} />);
    return items;
  };
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        minWidth: "630px",
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
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button
            variant={
              filter === 0
                ? "outlined"
                : filter === 1
                ? "contained"
                : "outlined"
            }
            onClick={() => handleChangeFilter(1)}
          >
            Psy
          </Button>
          <Button
            variant={
              filter === 0
                ? "outlined"
                : filter === 2
                ? "contained"
                : "outlined"
            }
            onClick={() => handleChangeFilter(2)}
          >
            Koty
          </Button>
        </Box>
      </Box>
      <Grid container spacing={0}>
        <Grid item xs={2.4}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            #Numer
          </Typography>
        </Grid>
        <Grid item xs={2.4}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Imie
          </Typography>
        </Grid>
        <Grid item xs={2.4}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Gatunek
          </Typography>
        </Grid>
        <Grid item xs={2.4}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Wiek
          </Typography>
        </Grid>
        <Grid item xs={2.4}></Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "85%",
          overflowY: "auto",
        }}
      >
        {returnItems()}
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

export default AnimalList;