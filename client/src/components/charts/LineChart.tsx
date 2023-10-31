import { Box, Button, Typography } from "@mui/material";

import { ChartDataType } from "../../utils/types/basicTypes";
import { Line } from "react-chartjs-2";
import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type dataType = {
  data: ChartDataType;
  link?: string;
};
const LineChart = (props: dataType) => {
  const navigate = useNavigate();
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
        onClick={() => {if(props.link) navigateTo(navigate,props.link)}}
      >
        Przejdź
      </Button>
    </Box>
  );
};

export default LineChart;
