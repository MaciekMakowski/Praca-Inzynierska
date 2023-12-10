import { useTheme } from "@mui/material";
import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartDataType } from "../../utils/types/basicTypes";

type dataType = {
  data: ChartDataType;
  title: string;
  withLegend?: boolean;
};

const VerticalChart = (props: dataType) => {
  const theme = useTheme();
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: props.withLegend,
      },
      title: {
        display: true,
        text: props.title,
      },
    },
    maintainAspectRatio: false,
  };

  return <Bar data={props.data} options={options} />;
};

export default VerticalChart;
