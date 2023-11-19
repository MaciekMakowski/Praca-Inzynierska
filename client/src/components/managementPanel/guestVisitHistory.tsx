import { Box, Button, Grid, Pagination, Typography, useTheme } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import GuestVisitHistoryItem from "./guestVisitHistoryItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { handleChangeDate } from "../../utils/functions/handlers";
import { useState } from "react";

const GuestVisitHistory = () => {
  const theme = useTheme();

  const [filter, setFilter] = useState("");
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format("DD-MM-YYYY"), setFilter, "birthDate");
  };

  const returnItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++)
      items.push(<GuestVisitHistoryItem key={i} color={i % 2 == 0} />);
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
              defaultValue={dayjs(filter, "DD-MM-YYYY")}
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
    </Box>
  );
};

export default GuestVisitHistory;
