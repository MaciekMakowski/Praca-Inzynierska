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
import { getResources } from "../../../utils/services/gets";
import { paginationRangeValue } from "../../../utils/services/pagination";
import { ResourceType } from "../../../utils/types/basicTypes";
import Loader from "../../loader";
import FilterComponent from "../filterComponent";
import ResourceListItem from "./resourceListItem";

type ResourcesListProps = {
  refresh: boolean;
};

const ResourcesList = (props: ResourcesListProps) => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [resources, setResources] = useState<ResourceType[] | null>(null);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getResources(page, paginationRangeValue).then((res) => {
      if (res) {
        setResources(res.data);
        setPageCount(res.meta.pageCount);
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
          <TextField label="Wyszukaj" />
        </Box>
        <FilterComponent />
      </Box>
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "clip",
          height: "100%",
        }}
      >
        <Grid
          width="100%"
          container
          spacing={0}
          sx={{
            width: { xs: "1000px", lg: "100%" },
            paddingRight: { xs: "0", lg: "1rem" },
          }}
        >
          <Grid item xs={1.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Numer
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Nazwa
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Rodzaj
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Ilość
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Jednostka
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
            >
              Data przydatności
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: { xs: "60vh", lg: "100%" },
            width: { xs: "1000px", lg: "100%" },
            overflowY: "auto",
          }}
        >
          {resources ? (
            resources.map((resource, i) => {
              return (
                <ResourceListItem
                  key={resource.id}
                  color={i % 2 === 0}
                  resource={resource}
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

export default ResourcesList;
