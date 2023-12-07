import { Button, Grid, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { navigateTo } from "../../../utils/functions/navigators";
import { MeetingType } from "../../../utils/types/basicTypes";

type MeetingListItemProps = {
  color: boolean;
  meeting: MeetingType;
};

const VolunteerMeetingsListItem = (props: MeetingListItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  if (!props.meeting.attributes.guest) return null;
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
      <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          {dayjs(props.meeting.attributes.date).format("DD.MM.YYYY")}
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
          {dayjs(props.meeting.attributes.date).format("HH:mm")}
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
          {props.meeting.attributes.guest.attributes.name}{" "}
          {props.meeting.attributes.guest.attributes.lastName}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Button
          sx={{
            color: {
              color: props.color
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
            },
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

export default VolunteerMeetingsListItem;
