import { Box, useTheme } from "@mui/material";
import {
  FoodData,
  PetData,
  VetData,
  VisitorsData,
} from "../../../utils/mockups/diagData";

import LineChart from "../../../components/charts/LineChart";
import PieChart from "../../../components/charts/pieChart";

const fakeData = [
  {
    id: 1,
    name: "Azor",
  },
  {
    id: 2,
    name: "Pimpek",
  },
  {
    id: 3,
    name: "Szyszek",
  },
  {
    id: 4,
    name: "Azor",
  },
  {
    id: 5,
    name: "Pimpek",
  },
  {
    id: 6,
    name: "Szyszek",
  },
];

const Panel = () => {
  const theme = useTheme();
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
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { lg: "row" },
          flexWrap: { xs: "wrap", lg: "nowrap" },
        }}
      ></Box>
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
          <PieChart
            data={PetData}
            title="Zwierzęta"
            link="/admin/management/animals"
            withLegend={false}
          />
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
          <PieChart
            data={FoodData}
            title="Karma w schronisku"
            link="/admin/management/resources"
            withLegend={false}
          />
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
          <PieChart
            data={VetData}
            title="Izolacje i choroby"
            withLegend={false}
          />
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
