import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import EditPetDiseaseModal from "../../../components/managementPanel/editPetDiseaseModal";
import { PetDiseaseType } from "../../../utils/types/basicTypes";
import { getAnimalDisease } from "../../../utils/services/gets";
import { useParams } from "react-router";

const PetDiseaseDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [petDisease, setPetDisease] = useState<PetDiseaseType>();
  const { petId } = useParams();

  useEffect(() => {
    if(petId)
    getAnimalDisease(petId).then((res) => {
      if(res){
        setPetDisease(res);
      }
    })
  },[petId])
  return (
    <>
      {!petDisease ? <>Loading...</> : (
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
            <Typography variant="body1"> {petDisease.attributes.disease.attributes.name}</Typography>
          </Typography>
          <Typography
            variant="h6"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Choroba zwierzęcia
            <Typography variant="body1"> {petDisease.attributes.animal.attributes.name}</Typography>
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
            <Typography variant="body1"> {petDisease.attributes.endDate}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Objawy
            <Typography variant="body1"> {petDisease.attributes.symptoms}</Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Status
            <Typography variant="body1"> {petDisease.attributes.status}</Typography>
          </Typography>
          <Box>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Edytuj
            </Button>
          </Box>
        </Box>
      </Box>
      <EditPetDiseaseModal
        open={open}
        setOpen={setOpen}
        data={petDisease}
      />
        </>
      )}
    </>
  );
};

export default PetDiseaseDetails;
