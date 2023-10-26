import {
  Box,
  useTheme,
  Modal,
  TextField,
  Typography,
  Button,
  IconButton,
  Autocomplete
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import { EditPetModalProps, PetDiseaseType } from "../../utils/types/basicTypes";
import { useState } from "react";
import { handleChangeDate } from "../../utils/functions/handlers";
import { diseasesData } from "../../utils/mockups/diagData";

const AddPetDiseaseModal = (props: EditPetModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newDisease, setNewDisease] = useState<PetDiseaseType>({
    startDate: "",
    endDate: "",
    diseaseId: 0,
    petId: props.data.number,
  });
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format('DD-MM-YYYY'), setNewDisease, 'startDate')
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
          width: "25%",
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
            Dodaj chorobę
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={diseasesData.map((option) => option.name)}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Nazwa choroby" />}
        />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{
                  flexGrow: 1,
                }}
                label="Data rozpoczęcia choroby"
                onChange={(value: Dayjs | null) => dateChange(value)}
              />
            </DemoContainer>
          </LocalizationProvider>

          <Button variant="contained">Zabisz</Button>
        </Box>
    </Modal>
  );
};

export default AddPetDiseaseModal;
