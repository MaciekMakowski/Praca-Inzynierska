import { Button, Grid, Typography, useTheme } from "@mui/material";

import { navigateTo } from "../../utils/functions/navigators";
import { useNavigate } from "react-router";

type MeetingListItemProps = {
  color: boolean;
};

const MeetingListItem = (props: MeetingListItemProps) => {
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
          #21342
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          20-09-2021
        </Typography>
      </Grid>
      <Grid item xs={1} md={1}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          12:45
        </Typography>
      </Grid>
      <Grid item xs={2} md={2.5}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          Adam Nowak
        </Typography>
      </Grid>
      <Grid item xs={2} md={2.5}>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={
            props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          Andrzej Walec
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}>
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
          onClick={() => navigateTo(navigate, "/admin/management/meetings/1")}
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default MeetingListItem;
