import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import { navigateTo } from "../../utils/functions/navigators";
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
          123123
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
          Puszek
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
          Kot
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
          16
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
          Las bartąg
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
          Europejczyk
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={() => navigateTo(navigate,`/admin/management/animals/5`)}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default AnimalListItem;
