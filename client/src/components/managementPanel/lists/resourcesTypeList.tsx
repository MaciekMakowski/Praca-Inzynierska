import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import Loader from "../../loader";
import ResourceTypeListItem from "./resourcesTypeListItem";
import { ResourceTypeType } from "../../../utils/types/basicTypes";
import { getResourcesTypes } from "../../../utils/services/gets";

type ResourcesTypeListProps = {
  resourceTypes: ResourceTypeType[];
}

const ResourcesTypeList = (props:ResourcesTypeListProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        flexGrow: {xs:0, md:1},
        height: {xs:'40vh', xl:'30%'},
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: theme.shadows[3],
        width: {xs:'none', md:'100%'},
      }}
    >
      <Grid width="99%" container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Numer
          </Typography>
        </Grid>
        <Grid item xs={9} lg={10}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Nazwa
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: {xs:'60vh', xl:'100%'},
          width: {xs:'100%', xl:'100%'},
          overflowY: "auto",
        }}
      >
        {props.resourceTypes ? props.resourceTypes.map((resourceType: ResourceTypeType, i) => {
          return(
            <ResourceTypeListItem key={i} color={i % 2 == 0} data={resourceType}/>
          )
        }): <Loader/>}
      </Box>
    </Box>
  );
};

export default ResourcesTypeList;
