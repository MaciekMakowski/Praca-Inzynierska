import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import VerticalChart from "../../../components/charts/verticalChart";
import Loader from "../../../components/loader";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import { getIsolationsStatistics } from "../../../utils/services/gets";

const IsolationStatistics = () => {
  const [data, setData] = useState<any>(null);
  const theme = useTheme();
  useEffect(() => {
    getIsolationsStatistics().then((res) => {
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
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(data.isolationsByMonth, "Dni")}
                  title="Ilość izolacji w danym miesiącu"
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
                  width: { xs: "fit-content", lg: "100%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(
                    data.meanTimeForIsolation,
                    "Dni"
                  )}
                  title="Średni czas Izolacji"
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
                data={transformArrDataForChart(data.isolationsFreq, "Ilość")}
                title="Częstotliwość izolacji"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default IsolationStatistics;
