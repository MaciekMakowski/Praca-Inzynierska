import 'chart.js/auto'

import { Box, Button, Typography, useTheme } from "@mui/material";

import { ChartDataType } from "../../utils/types/basicTypes";
import { ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type dataType<T> = {
  data: ChartDataType;
  title: string;
  link?: string;
};

const PieChart = (props: dataType<any>) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const options:ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { xs: "30%", md: "60%" },
        width: {xs:'100%', md:'30%'},
        alignItems: "center",
        marginY: {xs:"0",lg:"1rem"},
        gap: "1rem",
      }}
    >
      <Pie data={props.data} options={options} />
          {props.link && (
            <Button
              variant="outlined"
              sx={{
                width: "fit-content",
              }}
              onClick={() => {
                const link = props.link;
                if (link) {
                  navigateTo(navigate,link);
                }
              }}
            >
              Przejdź do zarządzania
            </Button>
          )}
    </Box>
  );
};

export default PieChart;
