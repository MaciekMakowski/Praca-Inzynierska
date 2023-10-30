import { Button, Grid, Typography, useTheme } from "@mui/material";

type ResourceListItemProps = {
  color: boolean;
};

const ResourceListItem = (props: ResourceListItemProps) => {
  const theme = useTheme();

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
        >
          1231
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
          Karma Whiskas
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
          Jedzenie
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
          14
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
          KG
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
          20-10-2027
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default ResourceListItem;
