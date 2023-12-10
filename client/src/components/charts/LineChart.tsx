import { Box, Button } from "@mui/material";

import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router";
import { navigateTo } from "../../utils/functions/navigators";
import { ChartDataType } from "../../utils/types/basicTypes";

type dataType = {
  data: ChartDataType;
  link?: string;
  title?: string;
};
const LineChart = (props: dataType) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { xs: "30vh", md: "80%" },
        width: "100%",
        alignItems: "center",
      }}
    >
      <Line
        data={props.data}
        options={{
          maintainAspectRatio: false,
        }}
      />
      {props.link ? (
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
          }}
          onClick={() => {
            if (props.link) navigateTo(navigate, props.link);
          }}
        >
          Przejdź
        </Button>
      ) : null}
    </Box>
  );
};

export default LineChart;
