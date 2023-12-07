import { Button, Grid, Typography, useTheme } from "@mui/material";

import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { navigateTo } from "../../../utils/functions/navigators";
import { MeetingType } from "../../../utils/types/basicTypes";

type MeetingListItemProps = {
  color: boolean;
  meeting: MeetingType;
};

const MeetingListItem = (props: MeetingListItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  if (!props.meeting.attributes.guest) return null;
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
          {props.meeting.id}
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
          {dayjs(props.meeting.attributes.date).format("DD.MM.YYYY")}
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
          {dayjs(props.meeting.attributes.date).format("HH:mm")}
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
          {props.meeting.attributes.guest.attributes.name}{" "}
          {props.meeting.attributes.guest.attributes.lastName}
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
          {props.meeting.attributes.volunteer.attributes.name}{" "}
          {props.meeting.attributes.volunteer.attributes.lastName}
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
          {props.meeting.attributes.status}
        </Typography>
      </Grid>
      <Grid item xs={2} md={1}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.text.primary
              : theme.palette.text.secondary,
          }}
          onClick={() =>
            navigateTo(
              navigate,
              `/admin/management/meetings/${props.meeting.id}`
            )
          }
        >
          Przejdź
        </Button>
      </Grid>
    </Grid>
  );
};

export default MeetingListItem;
