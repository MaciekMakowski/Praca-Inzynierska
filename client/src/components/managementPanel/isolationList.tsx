import {
  Box,
  Button,
  Grid,
  Pagination,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import IsolationListItem from "./isolationListItem";
import { useState } from "react";

const IsolationList = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState(0);

  const handleChangeFilter = (value: number) => {
    if (value === filter) setFilter(0);
    if (value !== filter) setFilter(value);
  };

  const returnItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++)
      items.push(<IsolationListItem key={i} color={i % 2 == 0} />);
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
        width: {xs:'none', md:'700px' ,lg:'1000px'},
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
      <Box 
        sx={{
          overflowX:'auto',
          overflowY:'clip'
        }}
      >
      <Grid container spacing={0} 
        sx={{
          width: {xs:'700px', lg:'100%'},
        }}
      >
      <Grid item xs={1}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Numer
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Imię
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Data zakończenia
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Data zakończenia
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Powód
        </Typography>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: {xs:'60vh', lg:'100%'},
          width: {xs:'700px', lg:'100%'},
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

export default IsolationList;
