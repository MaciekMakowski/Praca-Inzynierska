import { Button, Grid, Typography, useTheme } from "@mui/material";

import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type PersonsListItemProps = {
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
          #1234
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
          Adam
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
          Nowak
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
          21-04-1999
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
          453-234-234
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
          Olsztyn
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
          10-041
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
          Słoneczna 12a/5
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
          onClick={() => navigateTo(navigate, `/admin/management/personDetails/${props.type}/1`)}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonsListItem;
