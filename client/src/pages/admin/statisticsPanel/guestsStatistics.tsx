import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import LineChart from "../../../components/charts/LineChart";
import PieChart from "../../../components/charts/pieChart";
import VerticalChart from "../../../components/charts/verticalChart";
import Loader from "../../../components/loader";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import { getGuestsStatistics } from "../../../utils/services/gets";

const GuestsStatistics = () => {
  const [data, setData] = useState<any>(null);
  const theme = useTheme();
  useEffect(() => {
    getGuestsStatistics().then((res) => {
      if (res) setData(res);
      console.log(res);
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
              Statystyki Gości
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
                  data={transformArrDataForChart(data.guestsAges, "Ilość")}
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
                    data.guestsVisitsByDays,
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
                  data={transformArrDataForChart(data.guestsSex, "Ilość osób")}
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
                    data.guestsVisitsBySex,
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
                    data.guestsVisitsMeanTimeBySex,
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
                  data.guestsVisitsByMonth,
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

export default GuestsStatistics;
