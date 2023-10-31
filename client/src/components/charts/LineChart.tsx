import { Box, Button, Typography } from "@mui/material";

import { ChartDataType } from "../../utils/types/basicTypes";
import { Line } from "react-chartjs-2";

type dataType = {
  data: ChartDataType;
};
const LineChart = (props: dataType) => {
  return (
    <Box
      sx={{
        
        display:  "flex" ,
        flexDirection: "column",
        height: {xs:"30vh",md:"80%"},
        width: "100%",
        alignItems: "center",
      }}
    >
      <Line data={props.data} options={{
        maintainAspectRatio: false,
      }}/>
    
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

export default LineChart;
