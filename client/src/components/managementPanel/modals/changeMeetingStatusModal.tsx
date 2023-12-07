import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction, useState } from "react";
import { updateMeetingStatus } from "../../../utils/services/puts";
import { MeetingType } from "../../../utils/types/basicTypes";

type ChangeMeetingStatusModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  status?: string;
  setMeeting: Dispatch<SetStateAction<MeetingType | null>>;
  meeting: MeetingType;
  setRefresh: Dispatch<SetStateAction<boolean>>;
};

const ChangeMeetingStatusModal = (props: ChangeMeetingStatusModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newStatus, setNewStatus] = useState<string>(
    props.meeting.attributes.status
  );

  const selectChange = (event: SelectChangeEvent) => {
    setNewStatus((prev) => (prev = event.target.value));
  };

  const sendForm = () => {
    updateMeetingStatus(props.meeting.id, newStatus).then((res) => {
      if (res) {
        handleClose();
        props.setRefresh(true);
      }
    });
  };

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.adminField,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "30%",
          minWidth: { xs: "90%", lg: "600px" },
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
            Zmień Status Spotkania
          </Typography>
          <IconButton onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </Box>
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            onChange={selectChange}
            name="status"
            defaultValue={props.status || ""}
          >
            <MenuItem value={"Oczekujące"}>Oczekujące</MenuItem>
            <MenuItem value={"W trakcie"}>W trakcie</MenuItem>
            <MenuItem value={"Zakończone"}>Zakończone</MenuItem>
            <MenuItem value={"Anulowane"}>Anulowane</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={() => sendForm()}>
          Zapisz
        </Button>
      </Box>
    </Modal>
  );
};

export default ChangeMeetingStatusModal;
