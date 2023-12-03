import {
  Box,
  Button,
  Grid,
  Pagination,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import IllAnimalListItem from "./illAnimalListItem";
import Loader from "../../loader";
import { PetDiseaseType } from "../../../utils/types/basicTypes";
import { getAnimalsDiseases } from "../../../utils/services/gets";
import { paginationRangeValue } from "../../../utils/services/pagination";

const IllAnimalList = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState(0);
  const [page,setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [illAnimals, setIllAnimals] = useState<PetDiseaseType[]>();

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeFilter = (value: number) => {
    if (value === filter) setFilter(0);
    if (value !== filter) setFilter(value);
  };

  useEffect(() => {
    getAnimalsDiseases(page, paginationRangeValue).then((res) => {
      if(res){
        setIllAnimals(res.data);
        setPageCount(res.meta.total_pages);
      }
    })
  },[]);

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
        minWidth:{xs:'100%', md:'500px'}

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
          overflowY:'clip',
          height:'100%'
        }}
      >
      <Grid container spacing={0}  
        sx={{
          width: {xs:'100%', lg:'100%'},
        }}>
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
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Gatunek
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Wiek
          </Typography>
        </Grid>
        <Grid item xs={3.2}></Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: {xs:'60vh', md:'100%', lg:'100%'},
          width: '100%',
          overflowY:'auto',
        }}
      >
        {illAnimals ? illAnimals.map((illAnimal, i) => {
            return(
              <IllAnimalListItem key={illAnimal.id} color={i%2 === 0} petDisease={illAnimal}/>
            )
        }
        ): <Loader/>}
      </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          <Pagination count={pageCount} page={page} onChange={changePage} size="small" />
        </Typography>
      </Box>
    </Box>
  );
};

export default IllAnimalList;
