import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { getResource, getResourcesTypes } from "../../../utils/services/gets";

import { useParams } from "react-router";
import Loader from "../../../components/loader";
import EditResourceModal from "../../../components/managementPanel/modals/editResourceModal";
import { ResourceType } from "../../../utils/types/basicTypes";

const ResourceDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [resourcesTypes, setResourcesTypes] = useState([]);
  const [resourceDetailsData, setResourceDetailsData] =
    useState<ResourceType | null>();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (id && refresh) {
      getResourcesTypes().then((res) => {
        if (res) {
          setResourcesTypes(res);
        }
      });
      getResource(+id).then((res) => {
        if (res) {
          setResourceDetailsData(res);
        }
      });
      setRefresh(false);
    }
  }, [id, refresh]);

  return (
    <>
      {!resourceDetailsData ? (
        <Loader />
      ) : (
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
                <Typography variant="body1">
                  {" "}
                  {resourceDetailsData.attributes.name}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Rodzaj zasobu
                <Typography variant="body1">
                  {" "}
                  {resourceDetailsData.attributes.type.attributes.name}
                </Typography>
              </Typography>
              {resourceDetailsData.attributes.subtype ? (
                <Typography
                  variant="subtitle1"
                  color={theme.palette.text.primary}
                  fontWeight={600}
                >
                  Podkategoria
                  <Typography variant="body1">
                    {" "}
                    {resourceDetailsData.attributes.subtype.attributes.name}
                  </Typography>
                </Typography>
              ) : null}
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Ilość
                <Typography variant="body1">
                  {" "}
                  {resourceDetailsData.attributes.quantity}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Jednostka
                <Typography variant="body1">
                  {" "}
                  {resourceDetailsData.attributes.unit}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Data ważności
                <Typography variant="body1">
                  {" "}
                  {resourceDetailsData.attributes.expirationDate}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Status
                <Typography variant="body1">
                  {" "}
                  {resourceDetailsData.attributes.status}
                </Typography>
              </Typography>
              <Box>
                <Button variant="contained" onClick={() => setOpen(true)}>
                  Edytuj
                </Button>
              </Box>
            </Box>
          </Box>
          <EditResourceModal
            open={open}
            setOpen={setOpen}
            data={resourceDetailsData}
            resourceTypes={resourcesTypes}
            setRefresh={setRefresh}
          />
        </>
      )}
    </>
  );
};

export default ResourceDetails;
