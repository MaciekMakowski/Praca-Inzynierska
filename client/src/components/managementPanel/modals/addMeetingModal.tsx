import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import { getPerson } from "../../../utils/services/gets";
import { createMeeting } from "../../../utils/services/posts";
import { MeetingType, PersonType } from "../../../utils/types/basicTypes";
type AddMeetingModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  person: PersonType;
};

const AddMeetingModal = (props: AddMeetingModalProps) => {
  const emptyMeeting: MeetingType = {
    id: 0,
    attributes: {
      date: "",
      guest: null,
      volunteer: props.person,
      status: "Oczekujące",
    },
  };

  const theme = useTheme();
  const [guestNumber, setGuestNumber] = useState<number | null>(null);
  const [guestExist, setGuestExist] = useState<boolean>(false);
  let newMeeting = emptyMeeting;
  let time = "";
  const handleClose = () => props.setOpen(false);

  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    newMeeting.attributes.date = value.format("YYYY-MM-DD");
    console.log(newMeeting);
  };
  const timeChange = (value: Dayjs | null) => {
    if (value === null) return;
    time = `T${value.format("HH:mm")}:00.000Z`;
  };
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestNumber(parseInt(e.target.value));
  };

  const sendForm = () => {
    if (guestNumber === null) return;
    getPerson("guest", guestNumber.toString()).then((res) => {
      if (res) {
        setGuestExist(true);
        newMeeting.attributes.guest = res;
        newMeeting.attributes.date = newMeeting.attributes.date + time;
        createMeeting(newMeeting).then((res) => {
          if (res) {
            newMeeting = emptyMeeting;
          }
        });
      } else {
        setGuestExist(false);
      }
    });
  };
  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.adminField,
          position: "absolute",
          maxHeight: "70vh",
          overflowY: "auto",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", xl: "400px" },
          boxSizing: "border-box",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: `${theme.palette.primary.main} 4px solid}`,
          borderRadius: [3],
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" color={theme.palette.text.primary}>
            Umów spotkanie
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField
            label="Numer gościa"
            type="number"
            onChange={handleChangeNumber}
            fullWidth
            error={!guestExist}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{
                  flexGrow: 1,
                }}
                format="YYYY-MM-DD"
                label="Data spotkania"
                disablePast
                onChange={(value: Dayjs | null) => dateChange(value)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                sx={{
                  flexGrow: 1,
                }}
                format="HH:mm"
                label="Godzina spotkania"
                onAccept={(value: Dayjs | null) => timeChange(value)}
              />
            </DemoContainer>
          </LocalizationProvider>

          <Button variant="contained" onClick={() => sendForm()}>
            Zapisz na spotkanie
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddMeetingModal;
