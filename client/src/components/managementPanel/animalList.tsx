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

import AnimalListItem from "./animalListItem";
import { AnimalType } from "../../utils/types/basicTypes";
import { ListProps } from "../../utils/types/propsTypes";
import { getAnimals } from "../../utils/services/gets";
import { paginationRangeValue } from "../../utils/services/pagination";

const AnimalList = (props: ListProps) => {
  const theme = useTheme();
  const [filter, setFilter] = useState(0);
  const [animalList, setAnimalList] = useState<AnimalType[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  const handleChangeFilter = (value: number) => {
    if (value === filter) setFilter(0);
    if (value !== filter) setFilter(value);
  };
  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (!props.refreshList)
      getAnimals(page, paginationRangeValue).then((res) => {
        if (res) {
          setAnimalList([]);
          setAnimalList(res.data);
          setPageCount(res.meta.pagination.pageCount);
        }
      });
  }, [page]);

  useEffect(() => {
    if (props.refreshList)
      getAnimals(page, paginationRangeValue).then((res) => {
        if (res) {
          setAnimalList([]);
          setAnimalList(res.data);
          setPageCount(res.meta.pagination.pageCount);
          props.setRefreshList(false);
        }
      });
  }, [props.refreshList]);
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        flexGrow: 1,
        height: "100%",
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: theme.shadows[3],
        minWidth: { xs: "100%", md: "75%" },
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
          overflowX: "auto",
          overflowY: "clip",
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            width: { xs: "1000px", md: "100%" },
            paddingRight: { xs: "0", lg: "1rem" },
          }}
        >
          <Grid item xs={1}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              #Numer
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Imie
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Gatunek
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
          <Grid item xs={2.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Miejsce znalezienia
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Rasa
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "95%",
            maxHeight: { xs: "40vh", md: "95%" },
            width: { xs: "1000px", md: "100%" },
            overflowY: "auto",
          }}
        >
          {animalList?.map((animal, i) => {
            return (
              <AnimalListItem key={i} color={i % 2 == 0} animal={animal} />
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={changePage}
            size="small"
          />
        </Typography>
      </Box>
    </Box>
  );
};
export default AnimalList;
