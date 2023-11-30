import { Button, Grid, Typography, useTheme } from "@mui/material";

import { DiseaseType } from "../../../utils/types/basicTypes";
import { navigateTo } from "../../../utils/functions/navigators";
import { useNavigate } from "react-router";

type DiseaseListItemProps = {
  color: boolean;
  disease:DiseaseType
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
      <Grid item xs={3} lg={3}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.disease.attributes.name}
        </Typography>
      </Grid>
      <Grid item xs={6} lg={7}>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign:{xs:'center', md:'left'},
            color: props.color? theme.palette.primary.main : theme.palette.text.secondary,
          }}
        >
          {props.disease.attributes.description}
        </Typography>
      </Grid>
      <Grid item xs={3} lg={2}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={() => navigateTo(navigate, `/admin/management/diseases/${props.disease.id}` )}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default DiseaseListItem;
