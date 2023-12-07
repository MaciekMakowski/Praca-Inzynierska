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
import { getAllMeetings } from "../../../utils/services/gets";
import { paginationRangeValue } from "../../../utils/services/pagination";
import { MeetingType } from "../../../utils/types/basicTypes";
import Loader from "../../loader";
import MeetingListItem from "./meetingListItem";

const MeetingList = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState(0);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [meetings, setMeetings] = useState<MeetingType[]>([]);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeFilter = (value: number) => {
    if (value === filter) setFilter(0);
    if (value !== filter) setFilter(value);
  };

  useEffect(() => {
    getAllMeetings(page, paginationRangeValue).then((res) => {
      if (res) {
        setMeetings(res.data);
        setPageCount(res.meta.pageCount);
      }
    });
  }, [filter]);

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
          <Grid item xs={2}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Data
            </Typography>
          </Grid>
          <Grid item xs={1} md={1}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Godzina
            </Typography>
          </Grid>
          <Grid item xs={2} md={2.5}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Gość
            </Typography>
          </Grid>
          <Grid item xs={2} md={2.5}>
            <Typography
              variant="body1"
              textAlign={"center"}
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Wolontariusz
            </Typography>
          </Grid>
          <Grid item xs={2} md={2}>
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
            height: { xs: "60vh", md: "100%", lg: "100%" },
            width: { xs: "800px", md: "100%" },
            overflowY: "auto",
          }}
        >
          {meetings ? (
            meetings.map((meeting, i) => {
              return (
                <MeetingListItem key={i} color={i % 2 == 0} meeting={meeting} />
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

export default MeetingList;
