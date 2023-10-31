import { Box, Button, Typography } from "@mui/material";

type dayInfo = {
  day: string;
  value: number;
};

type dataType = {
  data: dayInfo[];
};
const CalendarChart = (props: dataType) => {
  return (
    <Box
      sx={{
        
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        height: "80%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle1">Odwiedźiny wolontariuszy</Typography>
    
      <Button
        variant="outlined"
        sx={{
          width: "fit-content",
        }}
      >
        Przejdź
      </Button>
    </Box>
  );
};

export default CalendarChart;
