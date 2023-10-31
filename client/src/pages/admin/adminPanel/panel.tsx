import { Box, useTheme } from "@mui/material";
import {
  FoodData,
  PetData,
  VetData,
  VisitorsData
} from "../../../utils/mockups/diagData";

import CalendarChart from "../../../components/charts/LineChart";
import LineChart from "../../../components/charts/LineChart";
import PanelInfoSquare from "../../../components/PanelInfoSquare";
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
          paddingX: {xs:'0', md:'4rem'},
          gap: {xs:'1rem', md:'0'},
          display: "flex",
          width: "100%",
          height: "30%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row"},
          flexWrap: {xs:'wrap', lg:'nowrap'},
        }}
      >
        <PanelInfoSquare title="Zakończone izolacje" data={fakeData} />
        <PanelInfoSquare title="Zakończone Choroby" data={fakeData} />
        <PanelInfoSquare title="Zasoby bliskie zużycia" data={fakeData} />
        <PanelInfoSquare title="Pracownicy na dziś" data={fakeData} />
        <PanelInfoSquare title="Wolontariusze na dziś" data={fakeData} />
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          paddingX: {xs:'0', md:'4rem'},
          display: "flex",
          width: "100%",
          height: {xs:'100vh', md:'30%'},
          marginY: "1rem",
          justifyContent: "space-between",
          alignItems: "start",
          bgcolor: theme.palette.background.adminField,
          boxShadow: theme.shadows[3],
          flexDirection: { xs: "column", md: "row"},
        }}
      >
        <PieChart
          data={PetData}
          title="Zwierzęta"
          link="/admin/management/animals"
        />
        <PieChart
          data={FoodData}
          title="Karma w schronisku"
          link="/admin/management/resources"
        />
        <PieChart
          data={VetData}
          title="Izolacje i choroby"
        />
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          paddingX: "4rem",
          display: "flex",
          width: "100%",
          height: "30%",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <LineChart data={VisitorsData} />
      </Box>
      </>
  );
};

export default Panel;
