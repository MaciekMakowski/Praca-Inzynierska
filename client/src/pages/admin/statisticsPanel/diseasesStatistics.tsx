import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import LineChart from "../../../components/charts/LineChart";
import VerticalChart from "../../../components/charts/verticalChart";
import Loader from "../../../components/loader";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import { getDiseasesStatistics } from "../../../utils/services/gets";
const DiseaseStatistics = () => {
  const theme = useTheme();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!data)
      getDiseasesStatistics().then((res) => {
        setData(res);
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
              Statystyki chorób
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
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(
                    data.longestTimeForDisease,
                    "Dni"
                  )}
                  title="Najdłuższe choroby"
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
                    data.meanTimeForDisease,
                    "Dni"
                  )}
                  title="Średni czas choroby"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "50%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(data.diseasesFreq, "Ilość")}
                  title="Częstotliwość chorób"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "350px",
              }}
            >
              <LineChart
                data={transformArrDataForChart(
                  data.diseasesByMonth,
                  "Ilośc przyjętych w danym miesiącu"
                )}
                title="Rozkład chorób na miesiące"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DiseaseStatistics;
