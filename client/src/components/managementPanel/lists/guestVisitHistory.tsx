import { Box, Button, Grid, Pagination, Typography, useTheme } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import GuestVisitHistoryItem from "./guestVisitHistoryItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { VisitType } from "../../../utils/types/basicTypes";
import { handleChangeDate } from "../../../utils/functions/handlers";
import {useState} from "react";

type GuestVisitHistoryProps = {
  id: number;
  type: "volunteer" | "guest";
  refresh: boolean;
  visits:VisitType[];
};

const GuestVisitHistory = (props:GuestVisitHistoryProps) => {
  const theme = useTheme();
  const [filter, setFilter] = useState<string>(dayjs().format("YYYY-MM-DD"));
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    setFilter(value.format("YYYY-MM-DD"));
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
        width:{xs:'100%', lg:'45%'},
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
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
              textAlign={"center"}
            >
              Data
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
              textAlign={"center"}
            >
              Godzina wejścia
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontWeight={600}
              textAlign={"center"}
            >
              Godzina wyjścia
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
          {props.visits.map((visit, i) => {
            return(
              <GuestVisitHistoryItem key={i} color={i % 2 == 0} visit={visit} />
            )
          })}
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
    </Box>
  );
};

export default GuestVisitHistory;
