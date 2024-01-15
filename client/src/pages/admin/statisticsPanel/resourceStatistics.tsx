import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import PieChart from "../../../components/charts/pieChart";
import VerticalChart from "../../../components/charts/verticalChart";
import Loader from "../../../components/loader";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import { getResourceStatistics } from "../../../utils/services/gets";

const ResourceStatistics = () => {
  const [data, setData] = useState<any>(null);
  const theme = useTheme();
  useEffect(() => {
    getResourceStatistics().then((res) => {
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
              Statystyki Zasobów
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
                maxHeight: { xs: "none", lg: "250px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "33%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(
                    data.foodSubtypes,
                    "Dostępnych"
                  )}
                  title="Dostępne rodzaje jedzenia"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "33%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(data.foodStatuses, "Ilość")}
                  title="Podział jedzenia na stany"
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "fit-content", lg: "33%" },
                  height: { xs: "400px", lg: "100%" },
                }}
              >
                <PieChart
                  data={transformArrDataForChart(
                    data.inUseFoodTypes,
                    "Dostępnych"
                  )}
                  title="Rodzaje jedzenia w użyciu"
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
                  width: { lg: "100%" },
                  height: { xs: "400px", lg: "300px" },
                }}
              >
                <VerticalChart
                  data={transformArrDataForChart(data.closeToExpired, "Ilość")}
                  title="Artukuły bliskie przeterminowania"
                />
              </Box>
            </Box>
            {data.resourcesStats ? (
              <>
                {data.resourcesStats.map((item: any) => {
                  return (
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: "400px", lg: "300px" },
                      }}
                    >
                      <VerticalChart
                        data={transformArrDataForChart(item[1], "Ilość")}
                        title={`Podział dla ${item[0]}`}
                      />
                    </Box>
                  );
                })}
              </>
            ) : null}
            <Box
              sx={{
                width: "100%",
                height: "300px",
              }}
            >
              {" "}
              <VerticalChart
                data={transformArrDataForChart(data.resourceTypes, "Ilość")}
                title="Ilosć dostępnych zasobów"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ResourceStatistics;
