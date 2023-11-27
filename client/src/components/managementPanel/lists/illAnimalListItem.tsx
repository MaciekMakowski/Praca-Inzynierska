import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import { PetDiseaseType } from "../../../utils/types/basicTypes";
import dayjs from "dayjs";
import { navigateTo } from "../../../utils/functions/navigators";
import { useNavigate } from "react-router";

type AnimalListItemProps = {
  color: boolean;
  petDisease: PetDiseaseType;
};

const IllAnimalListItem = (props: AnimalListItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={0}
      sx={{
        width: { xs: "100%", lg: "100%" },
        border: props.color ? `1px solid ${theme.palette.primary.main}` : "",
        borderRadius: "0.3rem",
        boxSizing: "border-box",
        paddingY: "0.5rem",
        alignItems: "center",
        backgroundColor: props.color ? "" : theme.palette.background.light,
      }}
    >
      <Grid item xs={2.4}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.petDisease.attributes.animal.id}
        </Typography>
      </Grid>
      <Grid item xs={2.4}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.petDisease.attributes.animal.attributes.name}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.petDisease.attributes.animal.attributes.species}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {dayjs().diff(dayjs(props.petDisease.attributes.animal.attributes.birthDate),  "year") }
        </Typography>
      </Grid>
      <Grid item xs={3.2}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={() => navigateTo(navigate,`/admin/management/animals/diseases/${props.petDisease.id}`)}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default IllAnimalListItem;
