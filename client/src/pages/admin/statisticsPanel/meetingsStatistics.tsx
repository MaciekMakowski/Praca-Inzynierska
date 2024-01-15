import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import PieChart from "../../../components/charts/pieChart";
import VerticalChart from "../../../components/charts/verticalChart";
import Loader from "../../../components/loader";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import { getMeetingsStatistics } from "../../../utils/services/gets";

const MeetingsStatistics = () => {
  const [data, setData] = useState<any>(null);
  const theme = useTheme();
  useEffect(() => {
    getMeetingsStatistics().then((res) => {
      if (res) setData(res);
    });
  }, []);
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              height: "fit-content",
            }}
          >
            {" "}
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
              Statystyki Spotkań
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: { xs: "center", lg: "flex-start" },
                width: "100%",
                height: { xs: "none", lg: "300px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "70%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(
                    data.meetingsByDays,
                    "Ilośc spotkań"
                  )}
                  title="Rozkład spotkań w tygodniu"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "30%" },
                  height: { xs: "400px", lg: "300px" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(
                    data.meetingsByDayTime,
                    "Ilość spotkań"
                  )}
                  title="Rozkład spotkań w ciągu dnia"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: { xs: "center", lg: "flex-start" },
                width: "100%",
                height: { xs: "none", lg: "300px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "100%" },
                  height: { xs: "400px", lg: "300px" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(
                    data.meetingsByMonth,
                    "Ilośc spotkań"
                  )}
                  title="Rozkład spotkań w miesiącu"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "300px",
              }}
            >
              {" "}
              <VerticalChart
                data={transformArrDataForChart(
                  data.topVolunteers,
                  "Ilość spotkań"
                )}
                title="Najczęściej spotykający się wolontariusze"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MeetingsStatistics;
