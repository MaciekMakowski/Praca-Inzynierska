import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../../components/loader";
import EditPetDiseaseModal from "../../../components/managementPanel/modals/editPetDiseaseModal";
import { getAnimalDisease } from "../../../utils/services/gets";
import { PetDiseaseType } from "../../../utils/types/basicTypes";

const PetDiseaseDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [petDisease, setPetDisease] = useState<PetDiseaseType>();
  const [refresh, setRefresh] = useState(true);
  const { petId } = useParams();

  useEffect(() => {
    if (petId && refresh)
      getAnimalDisease(petId).then((res) => {
        if (res) {
          setPetDisease(res);
          setRefresh(false);
        }
      });
  }, [petId, refresh]);
  return (
    <>
      {!petDisease ? (
        <Loader />
      ) : (
        <>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Szczegóły choroby zwierzęcia
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
                Rodzaj choroby
                <Typography variant="body1">
                  {" "}
                  {petDisease.attributes.disease.attributes.name}
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Choroba zwierzęcia
                <Typography variant="body1">
                  {" "}
                  {petDisease.attributes.animal.attributes.name}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Data rozpoczęcia
                <Typography variant="body1">
                  {" "}
                  {petDisease.attributes.startDate}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Data zakończenia
                <Typography variant="body1">
                  {" "}
                  {petDisease.attributes.endDate}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Objawy
                <Typography variant="body1">
                  {" "}
                  {petDisease.attributes.symptoms}
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
                  {petDisease.attributes.status}
                </Typography>
              </Typography>
              {petDisease.attributes.status !== "Zakończona" ? (
                <Box>
                  <Button variant="contained" onClick={() => setOpen(true)}>
                    Edytuj
                  </Button>
                </Box>
              ) : null}
            </Box>
          </Box>
          <EditPetDiseaseModal
            open={open}
            setOpen={setOpen}
            data={petDisease}
            setRefresh={setRefresh}
          />
        </>
      )}
    </>
  );
};

export default PetDiseaseDetails;
