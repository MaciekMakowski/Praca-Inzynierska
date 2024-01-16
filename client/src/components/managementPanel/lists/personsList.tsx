import {
  Box,
  Button,
  Grid,
  Pagination,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getPeople } from "../../../utils/services/gets";
import { paginationRangeValue } from "../../../utils/services/pagination";
import { PersonType } from "../../../utils/types/basicTypes";
import Loader from "../../loader";
import PersonsListItem from "./personsListItem";

type PersonListProps = {
  type: "volunteer" | "guest";
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
};

const PersonsList = (props: PersonListProps) => {
  const theme = useTheme();
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [personsList, setPersonsList] = useState<PersonType[] | null>(null);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (!props.refresh)
      getPeople(props.type, page, paginationRangeValue).then((res) => {
        if (res) {
          setPersonsList([]);
          setPersonsList(res.data);
          setPageCount(res.meta.pagination.pageCount);
        }
      });
  }, [page]);

  useEffect(() => {
    if (props.refresh)
      getPeople(props.type, page, paginationRangeValue).then((res) => {
        if (res) {
          setPersonsList([]);
          setPersonsList(res.data);
          setPageCount(res.meta.pagination.pageCount);
          props.setRefresh(false);
        }
      });
  }, [props.refresh]);

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
        width: "100%",
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
          overflowX: "auto",
          overflowY: "clip",
          height: { xs: "60vh", lg: "100%" },
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            width: { xs: "1000px", md: "100%" },
          }}
        >
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
            height: { xs: "60vh", lg: "100%" },
            width: { xs: "1000px", md: "100%" },
            overflowY: "auto",
          }}
        >
          {personsList ? (
            personsList.map((person, i) => {
              return (
                <PersonsListItem
                  key={i}
                  color={i % 2 === 0}
                  person={person}
                  type={props.type}
                />
              );
            })
          ) : (
            <Loader />
          )}
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

export default PersonsList;
