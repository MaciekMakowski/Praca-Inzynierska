import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

import { AnimalType } from "../../utils/types/basicTypes";
import EditIcon from "@mui/icons-material/Edit";
import EditPetInfoModal from "./modals/editPetInfoModal";
import shadows from "@mui/material/styles/shadows";

type PetManagementInfoProps = {
  data: AnimalType;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const PetManagementInfo = (props: PetManagementInfoProps) => {
  const theme = useTheme();
  const [infoOpen, setInfoOpen] = useState(false);
  return (
    <Box
      sx={{
        height: { xs: "100%", xl: "40%" },
        weight: { xs: "100%", md: "50%", xl: "100%" },
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.adminField,
        borderRadius: "1rem",
        boxSizing: "border-box",
        padding: "1rem",
        boxShadow: shadows[3],
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: 0,
        }}
      >
        <IconButton onClick={() => setInfoOpen(true)}>
          <EditIcon />
        </IconButton>
      </Box>
      <Grid container spacing={0} direction={{ xs: "column", md: "row" }}>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              #Numer
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.id}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Imię
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.attributes.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Miejsce Znalezienia
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.attributes.findPlace}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Rasa
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.attributes.race}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Waga
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.attributes.weight} kg
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Płeć
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.attributes.sex}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Gatunek
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.attributes.species}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box textAlign={"center"}>
            <Typography
              fontWeight={600}
              variant="body1"
              color={theme.palette.text.primary}
            >
              Data urodzenia
            </Typography>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {props.data.attributes.birthDate}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <EditPetInfoModal
        open={infoOpen}
        setOpen={setInfoOpen}
        animal={props.data}
        setRefresh={props.setRefresh}
      />
    </Box>
  );
};

export default PetManagementInfo;
