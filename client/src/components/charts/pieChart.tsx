import { Box, Button, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { useNavigate } from "react-router";

type dataType<T> = {
  data: T[];
  title?: string;
  link?: string;
};

const PieChart = (props: dataType<any>) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70%",
        width: "33%",
        alignItems: "center",
        marginY: "1rem",
      }}
    >
      <ResponsivePie
        data={props.data}
        colors={props.data.map((item: any) => item.color)}
        margin={{ top: 15, right: 80, bottom: 10, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        enableArcLinkLabels={false}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#FFFFFF"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "left",
            direction: "column",
            justify: false,
            translateX: -50,
            translateY: 0,
            itemsSpacing: 10,
            itemWidth: 130,
            itemHeight: 18,
            itemTextColor: "#000",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
      {props.title && (
        <>
          <Typography variant="subtitle1" color={theme.palette.text.primary}>
            {props.title}
          </Typography>
          {props.link && (
            <Button
              variant="outlined"
              sx={{
                width: "fit-content",
              }}
              onClick={() => {
                const link = props.link;
                if (link) {
                  navigate(link);
                }
              }}
            >
              Przejdź do zarządzania
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default PieChart;
