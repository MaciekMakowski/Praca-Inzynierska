import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  handleChangeDate,
  handleTextChange,
} from "../../utils/functions/handlers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { EditPetModalProps } from "../../utils/types/propsTypes";
import { IsolationType } from "../../utils/types/basicTypes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";

const AddIsolationModal = (props: EditPetModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newIsolation, setNewIsolation] = useState<IsolationType>({
    id: 0,
    attributes: {
      startDate: "",
      endDate: "",
      reason: "",
      status: "Oczekująca",
      animal: props.animal,
      description: "",
    },
  });
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format("YYYY-MM-DD"), setNewIsolation, "startDate");
  };
  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewIsolation);
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
            Dodaj izolacje
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField
          label="Powód izolacji"
          name="reason"
          variant="outlined"
          onChange={textChange}
          value={newIsolation.attributes.reason}
        ></TextField>
        <TextField
          multiline
          label="Opis"
          name="description"
          variant="outlined"
          value={newIsolation.attributes.description}
          rows={9}
          onChange={textChange}
        ></TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              value={dayjs(newIsolation.attributes.startDate)}
              format="YYYY-MM-DD"
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
