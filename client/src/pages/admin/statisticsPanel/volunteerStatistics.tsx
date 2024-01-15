import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import LineChart from "../../../components/charts/LineChart";
import PieChart from "../../../components/charts/pieChart";
import VerticalChart from "../../../components/charts/verticalChart";
import Loader from "../../../components/loader";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import { getVolunteerStatistics } from "../../../utils/services/gets";

const VolunteerStatistics = () => {
  const [data, setData] = useState<any>(null);
  const theme = useTheme();
  useEffect(() => {
    getVolunteerStatistics().then((res) => {
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
              Statystyki Izolacji
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
                height: "25%",
              }}
            >
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "100%" },
                  height: { xs: "400px", lg: "300px" },
                }}
              >
                <LineChart
                  data={transformArrDataForChart(data.volunteersAges, "Ilość")}
                  title="Wolontariuszy wg wieku"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: { xs: "center", lg: "flex-start" },
                width: "100%",
                height: { xs: "none", lg: "25%" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "50%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(
                    data.volunteersVisitsByDays,
                    "Ilość wizyt"
                  )}
                  title="Rozkad wizyt na dni"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "16.6%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(
                    data.volunteersSex,
                    "Ilość osób"
                  )}
                  title="Podział płci wolonatriuszy"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "16.6%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(
                    data.volunteersVisitsBySex,
                    "Ilość wizyt"
                  )}
                  title="Podział wizyt na płeć"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "16.6%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(
                    data.volunteersVisitsMeanTimeBySex,
                    "Średni czas w godzinach"
                  )}
                  title="Średni czas wizyt na płeć"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "350px",
              }}
            >
              {" "}
              <VerticalChart
                data={transformArrDataForChart(
                  data.volunteersVisitsByMonth,
                  "Ilość"
                )}
                title="Ilość wizyt w miesiącu"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default VolunteerStatistics;
