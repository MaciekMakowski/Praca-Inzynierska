import {
  Box,
  Button,
  Grid,
  Pagination,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getVolunteerMeetings } from "../../../utils/services/gets";
import { paginationRangeValue } from "../../../utils/services/pagination";
import { MeetingType } from "../../../utils/types/basicTypes";
import Loader from "../../loader";
import EmptyList from "../emptyList";
import VolunteerMeetingsListItem from "./voluteerMeetingsListItem";

const VolunteerMeetingsList = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const [filter, setFilter] = useState<string>(dayjs().format("YYYY-MM-DD"));
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [meetings, setMeetings] = useState<MeetingType[] | null>(null);
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    setFilter(value.format("YYYY-MM-DD"));
  };

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (id)
      getVolunteerMeetings(id, page, paginationRangeValue).then((res) => {
        if (res) {
          setMeetings(res.data);
          setPageCount(res.meta.pageCount);
        }
      });
  }, [id]);

  return (
    <>
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
          width: { xs: "100%", lg: "45%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Box margin={"auto 0"}>
            <Button variant="contained">Szukaj</Button>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{
                  flexGrow: 1,
                }}
                format="YYYY-MM-DD"
                defaultValue={dayjs(filter)}
                label="Data wizyty"
                onChange={(value: Dayjs | null) => dateChange(value)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            overflowX: "auto",
            overflowY: "clip",
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              width: { xs: "100%", lg: "100%" },
            }}
          >
            <Grid item xs={3}>
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
                fontWeight={600}
                textAlign={"center"}
              >
                Data
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
                fontWeight={600}
                textAlign={"center"}
              >
                Godzina
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
                fontWeight={600}
                textAlign={"center"}
              >
                Dane gościa
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              height: { xs: "60vh", md: "90%" },
              width: "100%",
              overflowY: "auto",
            }}
          >
            {!meetings ? (
              <Loader />
            ) : meetings.length > 0 ? (
              meetings.map((meeting, i) => {
                return (
                  <VolunteerMeetingsListItem
                    key={i}
                    color={i % 2 == 0}
                    meeting={meeting}
                  />
                );
              })
            ) : (
              <EmptyList />
            )}
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
      </Box>
    </>
  );
};

export default VolunteerMeetingsList;
