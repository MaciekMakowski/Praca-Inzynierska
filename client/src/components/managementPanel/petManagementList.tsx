import { Box, Grid, Typography, useTheme } from "@mui/material";

import PetManagementListItem from "./petManagementListItem";

type PetManagementListProps = {
  title: string;
  type: "disease" | "isolation";
};

const PetManagementList = (props: PetManagementListProps) => {
  const theme = useTheme();

  const returnItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++)
      items.push(<PetManagementListItem key={i} color={i % 2 == 0} type={props.type}/>);
    return items;
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        width: "50%",
        height: "100%",
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
        {returnItems()}
      </Box>
    </Box>
  );
};

export default PetManagementList;
