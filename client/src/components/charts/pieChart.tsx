import "chart.js/auto";

import { Button, useTheme } from "@mui/material";

import { ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useNavigate } from "react-router";
import { navigateTo } from "../../utils/functions/navigators";
import { ChartDataType } from "../../utils/types/basicTypes";

type dataType = {
  data: ChartDataType;
  title: string;
  link?: string;
  withLegend?: boolean;
};

const PieChart = (props: dataType) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const options: ChartOptions<"pie"> = {
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

  return (
    <>
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
              navigateTo(navigate, link);
            }
          }}
        >
          Przejdź do zarządzania
        </Button>
      )}
    </>
  );
};

export default PieChart;
