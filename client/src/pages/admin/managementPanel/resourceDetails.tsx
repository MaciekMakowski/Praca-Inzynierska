import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import EditResourceModal from "../../../components/managementPanel/modals/editResourceModal";
import { getResourcesTypes } from "../../../utils/services/gets";
import { resourceDetailsData } from "../../../utils/mockups/adminMenu";

const ResourceDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [resourcesTypes, setResourcesTypes] = useState([]);

  useEffect(() => {
      getResourcesTypes().then((res) => {
        if (res) {
          setResourcesTypes(res);
        }})
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Szczegóły zasobu
      </Typography>
      <Box
        sx={{
          height: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Nazwa zasobu
            <Typography variant="body1"> {resourceDetailsData.name}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Rodzaj zasobu
            <Typography variant="body1"> {resourceDetailsData.type}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Podkategoria
            <Typography variant="body1"> {resourceDetailsData.subtype}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Ilość
            <Typography variant="body1"> {resourceDetailsData.quantity}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Jednostka
            <Typography variant="body1"> {resourceDetailsData.unit}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Data ważności
            <Typography variant="body1"> {resourceDetailsData.expirationDate}</Typography>
          </Typography>
          <Box>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Edytuj
            </Button>
          </Box>
        </Box>
      </Box>
      <EditResourceModal open={open} setOpen={setOpen} data={resourceDetailsData}/>
    </>
  );
};

export default ResourceDetails;
