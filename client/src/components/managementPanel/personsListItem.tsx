import { Button, Grid, Typography, useTheme } from "@mui/material";

import { PersonType } from "../../utils/types/basicTypes";
import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type PersonsListItemProps = {
  person:PersonType
  color: boolean;
  type: string;
};

const PersonsListItem = (props: PersonsListItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={0}
      sx={{
        border: props.color ? `1px solid ${theme.palette.primary.main}` : "",
        borderRadius: "0.3rem",
        boxSizing: "border-box",
        paddingY: "0.5rem",
        alignItems: "center",
        width: "100%",
        backgroundColor: props.color ? "" : theme.palette.background.light,
      }}
    >
      <Grid item xs={1}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.person.id}
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
        >
          {props.person.attributes.name}
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
        >
          {props.person.attributes.lastName}
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
        >
          {props.person.attributes.birthDate}
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
        >
          {props.person.attributes.phoneNumber}
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
        >
          {props.person.attributes.city}
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
        >
          {props.person.attributes.postCode}
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
          {props.person.attributes.address}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Button
          sx={{
            color: {
              color: props.color
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
            },
          }}
          onClick={() => navigateTo(navigate, `/admin/management/personDetails/${props.type}/${props.person.id}`)}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonsListItem;
