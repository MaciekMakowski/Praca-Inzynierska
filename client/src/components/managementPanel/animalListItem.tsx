import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import { AnimalType } from "../../utils/types/basicTypes";
import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type AnimalListItemProps = {
  color: boolean;
  animal:AnimalType
};

const AnimalListItem = (props: AnimalListItemProps) => {
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
      <Grid item xs={1.5}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          {props.animal.id}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          {props.animal.attributes.name}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          {props.animal.attributes.species}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          {props.animal.attributes.birthDate}
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
          textAlign={"center"}
        >
          {props.animal.attributes.findPlace}
        </Typography>
      </Grid>
      <Grid item xs={2.5}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          {props.animal.attributes.race}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={() => navigateTo(navigate,`/admin/management/animals/${props.animal.id}`)}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default AnimalListItem;
