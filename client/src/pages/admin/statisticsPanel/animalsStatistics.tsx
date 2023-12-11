import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import LineChart from "../../../components/charts/LineChart";
import PieChart from "../../../components/charts/pieChart";
import VerticalChart from "../../../components/charts/verticalChart";
import Loader from "../../../components/loader";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import { getAnimalsStatistics } from "../../../utils/services/gets";
const AnimalsStatistics = () => {
  const theme = useTheme();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!data)
      getAnimalsStatistics().then((res) => {
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
              Statystyki zwierząt
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
                  data={transformArrDataForChart(data.raceStats, "Ilość")}
                  title="Rasy zwierząt"
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
                  width: { xs: "fit-content", lg: "20%" },
                  height: { xs: "300px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(data.ageStats, "Ilość")}
                  title="Podział wiekowy"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "20%" },
                  height: { xs: "300px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(data.weightStats, "Ilość")}
                  title="Podział wiekowy"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "20%" },
                  height: { xs: "300px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(data.speciesStats, "Ilość")}
                  title="Podział na psy i koty"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "20%" },
                  height: { xs: "300px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(data.genderStats, "Ilość")}
                  title="Podział płciowy"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "20%" },
                  height: { xs: "300px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(data.statusStats, "Ilość")}
                  title="Podział na statusy"
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
                  data.admittedAnimals,
                  "Ilośc przyjętych w danym miesiącu"
                )}
                title="Rozkład przyjęć zwierząt"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AnimalsStatistics;
