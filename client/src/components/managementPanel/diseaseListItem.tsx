import { Button, Grid, Typography, useTheme } from "@mui/material";

import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type DiseaseListItemProps = {
  color: boolean;
};

const DiseaseListItem = (props: DiseaseListItemProps) => {
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
        backgroundColor: props.color ? "" : theme.palette.background.light,
      }}
    >
      <Grid item xs={3} lg={2}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          Angina
        </Typography>
      </Grid>
      <Grid item xs={6} lg={8}>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign:'left',
            color: props.color? theme.palette.primary.main : theme.palette.text.secondary
          }}
          
        >
          Duszenie, kaszel, katar, brak apetytu, gorączka, obrzęk szyji,
          ślinotok, biegunka, wymioty, zapalenie jelit cos tam jeszcze
        </Typography>
      </Grid>
      <Grid item xs={3} lg={2}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={() => navigateTo(navigate, `/admin/management/diseases/1` )}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default DiseaseListItem;
