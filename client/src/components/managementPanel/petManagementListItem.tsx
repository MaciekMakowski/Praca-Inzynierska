import { Button, Grid, Typography, useTheme } from "@mui/material";

import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type PetManagementListItemProps = {
  color: boolean;
  type: "disease" | "isolation";
  date:string,
  title:string,
  status:string,
  id:number
};

const PetManagementListItem = (props: PetManagementListItemProps) => {
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
      <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.date}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          {props.title}
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
          {props.status}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={
            props.type === "isolation" ? 
            () => navigateTo(navigate, `/admin/management/isolation/${props.id}`) : 
            () => navigateTo(navigate, `/admin/management/animals/diseases/${props.id}`)
          }
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default PetManagementListItem;
