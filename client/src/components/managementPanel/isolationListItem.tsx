import { Button, Grid, Typography, useTheme } from "@mui/material";

import { IsolationType } from "../../utils/types/basicTypes";
import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type IsolationListItemProps = {
  color: boolean;
  isolation:IsolationType
};

const IsolationListItem = (props: IsolationListItemProps) => {
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
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          {props.isolation.id}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          {props.isolation.attributes.animal.attributes.name}
        </Typography>
      </Grid>
      <Grid item xs={2} md={1.5}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          {props.isolation.attributes.startDate}
        </Typography>
      </Grid>
      <Grid item xs={2} md={1.5}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          {props.isolation.attributes.endDate}
        </Typography>
      </Grid>
      <Grid item xs={2} md={4.5}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          {props.isolation.attributes.reason}
        </Typography>
      </Grid>
      <Grid item xs={2} md={1.5}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          Zakńczona
        </Typography>
      </Grid>
      <Grid item xs={2} md={1}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary,
          }}
          onClick={() => navigateTo(navigate, `/admin/management/isolation/${props.isolation.id}`)}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default IsolationListItem;
