import { Box, Typography, useTheme } from "@mui/material";
import PanelInfoSquare from "../../../components/PanelInfoSquare";
import PieChart from "../../../components/charts/pieChart";
import {
  CalendarData,
  FoodData,
  PetData,
  VetData,
} from "../../../utils/mockups/diagData";
import CalendarChart from "../../../components/charts/calendarChart";

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
    <Box
      sx={{
        width: { xs: "1900px", xl: "calc(100% - 200px)" },
        height: "100vh",
        boxSizing: "border-box",
        paddingY: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          paddingX: "4rem",
          display: "flex",
          width: "100%",
          height: "30%",
          justifyContent: "space-between",
          alignItems: "center",
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
          paddingX: "4rem",
          display: "flex",
          width: "100%",
          height: "35%",
          marginY: "1rem",
          justifyContent: "space-between",
          alignItems: "start",
          bgcolor: theme.palette.background.adminField,
          boxShadow: theme.shadows[3],
        }}
      >
        <PieChart
          data={PetData}
          title="Zwierzęta"
          link="/admin/management/animals"
        />
        <PieChart
          data={FoodData}
          title="Zasoby"
          link="/admin/management/resources"
        />
        <PieChart data={VetData} title="Choroby i izolacje" />
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
        <CalendarChart data={CalendarData} />
      </Box>
    </Box>
  );
};

export default Panel;
