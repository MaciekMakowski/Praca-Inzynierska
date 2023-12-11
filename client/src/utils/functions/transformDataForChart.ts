import { ChartDataType } from "../types/basicTypes";
type ArrData = [string, number][];

export const transformArrDataForChart = (data: ArrData, title: string) => {
  const newData: ChartDataType = {
    labels: data.map((item) => item[0]),
    datasets: [
      {
        label: title,
        data: data.map((item) => item[1]),
      },
    ],
  };
  return newData;
};
