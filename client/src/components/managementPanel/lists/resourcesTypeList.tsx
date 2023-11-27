import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import ResourceTypeListItem from "./resourcesTypeListItem";
import { ResourceTypeType } from "../../../utils/types/basicTypes";
import { getResourcesTypes } from "../../../utils/services/gets";

const ResourcesTypeList = () => {
  const theme = useTheme();
  const [resourcesTypes, setResourcesTypes] = useState([]);

  useEffect(() => {
      getResourcesTypes().then((res) => {
        if (res) {
          setResourcesTypes(res);
        }})
  }, []);

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
        <Grid item xs={4} lg={3}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Numer
          </Typography>
        </Grid>
        <Grid item xs={8} lg={9}>
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
        {resourcesTypes.map((resourceType: ResourceTypeType, i) => {
          return(
            <ResourceTypeListItem key={i} color={i % 2 == 0} data={resourceType}/>
          )
        })}
      </Box>
    </Box>
  );
};

export default ResourcesTypeList;
