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

import { getIsolations } from "../../../utils/services/gets";
import { paginationRangeValue } from "../../../utils/services/pagination";
import { IsolationType } from "../../../utils/types/basicTypes";
import Loader from "../../loader";
import FilterComponent from "../filterComponent";
import IsolationListItem from "./isolationListItem";

const IsolationList = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState(0);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isolationList, setIsolationList] = useState<IsolationType[] | null>(
    null
  );

  const handleChangeFilter = (value: number) => {
    if (value === filter) setFilter(0);
    if (value !== filter) setFilter(value);
  };

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getIsolations(page, paginationRangeValue).then((res) => {
      if (res) {
        setIsolationList([]);
        setIsolationList(res.data);
        setPageCount(res.meta.pagination.pageCount);
      }
    });
  }, [page]);

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
        width: { xs: "none", md: "100%" },
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
          <FilterComponent />
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
            width: { xs: "800px", md: "100%" },
            paddingRight: { xs: "0", md: "1rem" },
          }}
        >
          <Grid item xs={1}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Numer
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Imię
            </Typography>
          </Grid>
          <Grid item xs={2} md={1.5}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Data rozpoczęcia
            </Typography>
          </Grid>
          <Grid item xs={2} md={1.5}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Data zakończenia
            </Typography>
          </Grid>
          <Grid item xs={2} md={4.5}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Powód
            </Typography>
          </Grid>
          <Grid item xs={2} md={1.5}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Status
            </Typography>
          </Grid>
          <Grid item xs={2} md={1}></Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: { xs: "60vh", md: "100%", lg: "95%" },
            width: { xs: "800px", md: "100%" },
            overflowY: "auto",
          }}
        >
          {isolationList ? (
            isolationList.map((item, i) => {
              return (
                <IsolationListItem
                  key={i}
                  color={i % 2 == 0}
                  isolation={item}
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

export default IsolationList;
