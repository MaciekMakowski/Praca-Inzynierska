import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import { useNavigate } from "react-router";

type AnimalListItemProps = {
  color: boolean;
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
      <Grid item xs={2.4}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          123123
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
          Puszek
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
          Kot
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
          16
        </Typography>
      </Grid>
      <Grid item xs={2.4}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={() => navigate(`/admin/management/animals/123`)}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default AnimalListItem;
