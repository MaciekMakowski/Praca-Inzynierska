import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import AddOrDelResourceTypeForm from "../../../components/managementPanel/forms/addOrDelResourceTypeForm";
import AddResourceForm from "../../../components/managementPanel/forms/addResourceForm";
import ResourcesList from "../../../components/managementPanel/lists/resourcesList";
import ResourcesTypeList from "../../../components/managementPanel/lists/resourcesTypeList";
import { getResourcesTypes } from "../../../utils/services/gets";

const ResourcesManagement = () => {
  const theme = useTheme();
  const [resourcesTypes, setResourcesTypes] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
      getResourcesTypes().then((res) => {
        if (res) {
          setResourcesTypes(res);
        }})
  }, [refresh]);
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.text.primary}
          fontWeight={600}
        >
          Zarządzanie zasobami
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          justifyContent: "start",
          flexDirection: { xs: "column", xl: "row"},
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <AddResourceForm resourceTypes={resourcesTypes}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <ResourcesTypeList resourceTypes={resourcesTypes}/>
          <AddOrDelResourceTypeForm setRefresh={setRefresh} resourceTypes={resourcesTypes}/>
        </Box>
        <ResourcesList />
      </Box>
    </>
  );
};

export default ResourcesManagement;
