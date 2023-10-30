import { AnimalType, EditPetModalProps, IsolationType } from "../../utils/types/basicTypes";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs, {Dayjs} from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { handleChangeDate } from "../../utils/functions/handlers";
import { useState } from "react";

const AddIsolationModal = (props: EditPetModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newIsolation, setNewIsolation] = useState<IsolationType>({
    startDate: "",
    endDate: "",
    reason: "",
    desc: "",
    petId: typeof props.data === "number" ? props.data : 0,
  });
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format('DD-MM-YYYY'), setNewIsolation, 'startDate')
  }

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
          minWidth: "600px",
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
            Dodaj izolacje
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField label="Powód izolacji" name="reason" variant="outlined">
          Wpisz powód izolacji
        </TextField>
        <TextField
          multiline
          label="Opis"
          name="desc"
          variant="outlined"
          rows={9}
        >
          Opisz stan zwierzęcia
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              label="Data rozpoczęcia izolacji"
              onChange={(value: Dayjs | null) => dateChange(value)}
            />
          </DemoContainer>
        </LocalizationProvider>

        <Button variant="contained">Zabisz</Button>
      </Box>
    </Modal>
  );
};

export default AddIsolationModal;
