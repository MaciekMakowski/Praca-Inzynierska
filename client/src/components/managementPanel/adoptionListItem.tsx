import { Button, Grid, Typography, useTheme } from "@mui/material";

import { AdoptionType } from "../../utils/types/basicTypes";
import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type AdoptionListItemProps = {
  adoption:AdoptionType;
  color: boolean;
};

const AdoptionListItem = (props: AdoptionListItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        border: props.color ? `1px solid ${theme.palette.primary.main}` : "",
        borderRadius: "0.3rem",
        boxSizing: "border-box",
        paddingY: "0.5rem",
        alignItems: "center",
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
          {props.adoption.id}
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
        >
          {props.adoption.attributes.guest.attributes.name} {props.adoption.attributes.guest.attributes.lastName}
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
          {props.adoption.attributes.animal.attributes.name}
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
          {props.adoption.attributes.guest.attributes.name}
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
          {props.adoption.attributes.date}
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
          {props.adoption.attributes.status}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary,
          }}
          onClick={() => navigateTo(navigate,"/admin/management/adoptions/1")}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};
export default AdoptionListItem;
