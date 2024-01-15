import { Box, Typography, useTheme } from "@mui/material";
import { IsolationType, PetDiseaseType } from "../../../utils/types/basicTypes";

import Loader from "../../loader";
import PetManagementListItem from "./petManagementListItem";

type PetManagementListProps = {
  title: string;
  type: "disease" | "isolation";
  data: IsolationType[] | PetDiseaseType[];
};

const PetManagementList = (props: PetManagementListProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        width: { xs: "100%", lg: "50%" },
        height: { xs: "50vh", lg: "100%" },
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: theme.shadows[3],
      }}
    >
      <Typography variant="h5" color={theme.palette.text.primary}>
        {props.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {props.data ? (
          props.data.map((item, i) => {
            if ("reason" in item.attributes) {
              return (
                <PetManagementListItem
                  key={i}
                  color={i % 2 == 0}
                  type={props.type}
                  date={item.attributes.startDate}
                  title={item.attributes.reason}
                  status={item.attributes.status}
                  id={item.id}
                />
              );
            }
            if ("symptoms" in item.attributes) {
              return (
                <PetManagementListItem
                  key={i}
                  color={i % 2 == 0}
                  type={props.type}
                  date={item.attributes.startDate}
                  // @ts-ignore
                  title={item.attributes.disease.name}
                  status={item.attributes.status}
                  id={item.id}
                />
              );
            }
          })
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default PetManagementList;
