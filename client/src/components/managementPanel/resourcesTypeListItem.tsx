import { useTheme, Box, Grid, Typography } from "@mui/material";

type ResourceTypeListItemProps = {
  color: boolean;
};

const ResourceTypeListItem = (props: ResourceTypeListItemProps) => {
  const theme = useTheme();

  return (
    <Grid
      width="99%"
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
      <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          1
        </Typography>
      </Grid>
      <Grid item xs={9}>
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
    </Grid>
  );
};

export default ResourceTypeListItem;
