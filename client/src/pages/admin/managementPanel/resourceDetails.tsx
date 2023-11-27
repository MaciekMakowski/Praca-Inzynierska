import { Box, Button, Typography, useTheme } from "@mui/material";

import EditResourceModal from "../../../components/managementPanel/modals/editResourceModal";
import { resourceDetailsData } from "../../../utils/mockups/adminMenu";
import { useState } from "react";

const ResourceDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
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
