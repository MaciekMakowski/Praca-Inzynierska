import { Box, Typography, useTheme } from "@mui/material";
import { VisitorsData } from "../../../utils/mockups/diagData";

import { useEffect, useState } from "react";
import LineChart from "../../../components/charts/LineChart";
import PieChart from "../../../components/charts/pieChart";
import { transformArrDataForChart } from "../../../utils/functions/transformDataForChart";
import {
  getAnimalsStatistics,
  getResourceStatistics,
  getUserInfo,
} from "../../../utils/services/gets";

const Panel = () => {
  const theme = useTheme();
  const [speciesStats, setSpeciesStats] = useState(null);
  const [foodStats, setFoodStats] = useState(null);
  const [animalStats, setAnimalStats] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getResourceStatistics().then((res) => {
      if (res) setFoodStats(res.foodSubtypes);
    });
    getAnimalsStatistics().then((res) => {
      if (res) {
        setSpeciesStats(res.speciesStats);
        setAnimalStats(
          res.statusStats.filter(
            (el: [string, number]) => el[0] !== "Adoptowane"
          )
        );
      }
    });
    getUserInfo().then((res) => {
      if (res) setUserInfo(res);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          boxSizing: "border-box",
          paddingX: { xs: "0", md: "4rem" },
          gap: { xs: "1rem", md: "0" },
          display: { display: "none", lg: "flex" },
          width: "100%",
          height: "30%",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { lg: "column" },
          flexWrap: { xs: "wrap", lg: "nowrap" },
        }}
      >
        <Typography variant="h4" color={theme.palette.text.primary}>
          Panel zarządzania schroniskiem dla zwierząt w Olsztynie
        </Typography>
        <Typography variant="h4" color={theme.palette.text.primary}>
          {userInfo
            ? // @ts-ignore
              `Witaj, ${userInfo.fullName}!`
            : "Witaj! Wystąpił błąd z pobraniem danych"}
        </Typography>
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          paddingX: { xs: "0", md: "4rem" },
          display: "flex",
          width: "100%",
          height: { xs: "100vh", md: "30%" },
          marginY: "1rem",
          justifyContent: "space-between",
          alignItems: "start",
          bgcolor: theme.palette.background.adminField,
          boxShadow: theme.shadows[3],
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: { xs: "30%", md: "60%" },
            width: { xs: "100%", md: "30%" },
            alignItems: "center",
            marginY: { xs: "0", lg: "1rem" },
            gap: "1rem",
          }}
        >
          {speciesStats && (
            <PieChart
              data={transformArrDataForChart(speciesStats, "Ilość")}
              title="Zwierzęta"
              link="/admin/management/animals"
              withLegend={false}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: { xs: "30%", md: "60%" },
            width: { xs: "100%", md: "30%" },
            alignItems: "center",
            marginY: { xs: "0", lg: "1rem" },
            gap: "1rem",
          }}
        >
          {foodStats && (
            <PieChart
              data={transformArrDataForChart(foodStats, "Ilość")}
              title="Karma w schronisku"
              link="/admin/management/resources"
              withLegend={false}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: { xs: "30%", md: "60%" },
            width: { xs: "100%", md: "30%" },
            alignItems: "center",
            marginY: { xs: "0", lg: "1rem" },
            gap: "1rem",
          }}
        >
          {animalStats && (
            <PieChart
              data={transformArrDataForChart(animalStats, "Ilość")}
              title="Izolacje i choroby"
              withLegend={false}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          width: "100%",
          height: "30%",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <LineChart data={VisitorsData} link="/admin/management/volunteers" />
      </Box>
    </>
  );
};

export default Panel;
