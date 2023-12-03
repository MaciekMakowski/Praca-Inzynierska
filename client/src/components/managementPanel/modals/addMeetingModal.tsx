import { Box, Button, IconButton, Modal, TextField, Typography, useTheme } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Dispatch, SetStateAction } from "react";
import dayjs, {Dayjs} from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PersonType } from "../../../utils/types/basicTypes";

type AddMeetingModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  person: PersonType;
};
const AddMeetingModal = (props: AddMeetingModalProps) => {
  const theme = useTheme();

  const handleClose = () => props.setOpen(false);
    const dateChange = (value: Dayjs | null) => {
        if (value === null) return;
        console.log(value.format("YYYY-MM-DD"));
    };
  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
            backgroundColor: theme.palette.background.adminField,
            position: "absolute",
            maxHeight: "80vh",
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
            fullWidth
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            sx={{
              flexGrow: 1,
            }}
            format="YYYY-MM-DD"
            label="Data spotkania"
            disableFuture
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
            disableFuture
            onChange={(value: Dayjs | null) => dateChange(value)}
          />
        </DemoContainer>
      </LocalizationProvider>
      
      <Button variant="contained">Zapisz na spotkanie</Button>
            
        </Box>
      </Box>
    </Modal>
  );
};

export default AddMeetingModal;
