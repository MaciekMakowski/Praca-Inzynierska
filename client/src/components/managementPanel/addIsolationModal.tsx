import {
  Box,
  useTheme,
  Modal,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, {Dayjs} from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import { AnimalType, EditPetModalProps, IsolationType } from "../../utils/types/basicTypes";
import { useState } from "react";

const AddIsolationModal = (props: EditPetModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newIsolation, setNewIsolation] = useState<IsolationType>({
    startDate: "",
    endDate: "",
    reason: "",
    desc: "",
    petId: props.data.number,
  });
  const handleChangeDate = (value: Dayjs | null) => {
    if (value === null) return;
    setNewIsolation((prevIsolation) => ({
      ...prevIsolation,
      startDate: value.format("YYYY-MM-DD"),
    }));
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
              onChange={(value: Dayjs | null) => handleChangeDate(value)}
            />
          </DemoContainer>
        </LocalizationProvider>

        <Button variant="contained">Zabisz</Button>
      </Box>
    </Modal>
  );
};

export default AddIsolationModal;
