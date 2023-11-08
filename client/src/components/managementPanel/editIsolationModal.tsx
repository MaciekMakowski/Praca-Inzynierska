import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  EditIsolationModalProps,
  PetDiseaseType,
} from "../../utils/types/basicTypes";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { handleChangeDate } from "../../utils/functions/handlers";
import { isolationStatusList } from "../../utils/mockups/adminMenu";
import { useState } from "react";

const EditIsolationModal = (props: EditIsolationModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newDisease, setNewDisease] = useState<PetDiseaseType>({
    startDate: "",
    endDate: "",
    diseaseId: 0,
    petId: typeof props.data === "number" ? props.data : 0,
  });
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format("DD-MM-YYYY"), setNewDisease, "startDate");
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
          width: { xs: "90%", md: "60%", lg: "40%", xl: "30%" },
          minWidth: "300px",
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
            Edytuj izolacje
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField 
        label="Powód"
        fullWidth
        multiline
        minRows={4}
        ></TextField>
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              label="Data zakończenia izolacji"
              onChange={(value: Dayjs | null) => dateChange(value)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={isolationStatusList.map((option) => option.name)}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="Status izolacji" />
          )}
        />

        <Button variant="contained">Zabisz</Button>
      </Box>
    </Modal>
  );
};

export default EditIsolationModal;
