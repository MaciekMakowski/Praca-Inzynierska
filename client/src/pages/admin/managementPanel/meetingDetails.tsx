import { Box, Typography, useTheme } from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../../components/loader";
import ManagementButton from "../../../components/managementPanel/managementButton";
import MeetingDetailsPerson from "../../../components/managementPanel/meetingDetailsPerson";
import ChangeMeetingStatusModal from "../../../components/managementPanel/modals/changeMeetingStatusModal";
import { getMeeting } from "../../../utils/services/gets";
import { MeetingType } from "../../../utils/types/basicTypes";

const MeetingDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [meeting, setMeeting] = useState<MeetingType | null>(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (id)
      getMeeting(id).then((res) => {
        if (res) {
          setMeeting(res);
          setRefresh(false);
        }
      });
  }, [id, refresh]);

  return (
    <>
      {!meeting ? (
        <Loader />
      ) : (
        <>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Szczegóły spotkania
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "2rem",
              height: "90%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Data spotkania:{" "}
                <Typography variant="body1" display={"inline"}>
                  {dayjs(meeting.attributes.date).format("DD.MM.YYYY")}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Godzina spotkania:{" "}
                <Typography variant="body1" display={"inline"}>
                  {dayjs(meeting.attributes.date).format("HH:mm")}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Status:{" "}
                <Typography variant="body1" display={"inline"}>
                  {meeting.attributes.status}
                </Typography>
              </Typography>
              <Box
                sx={{
                  marginX: "auto",
                }}
              >
                <ManagementButton
                  name={"Zmień Status"}
                  ico={CalendarMonthIcon}
                  disabled={false}
                  foo={() => setOpen(true)}
                />
              </Box>
            </Box>
            <MeetingDetailsPerson
              title="Dane Gościa"
              {...meeting.attributes.guest.attributes}
            />
            <MeetingDetailsPerson
              title="Dane Wolontariusza"
              {...meeting.attributes.volunteer.attributes}
            />
          </Box>
          <ChangeMeetingStatusModal
            open={open}
            setOpen={setOpen}
            status={meeting.attributes.status}
            setMeeting={setMeeting}
            meeting={meeting}
            setRefresh={setRefresh}
          />
        </>
      )}
    </>
  );
};

export default MeetingDetails;
