import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { EditPetModalProps } from "../../utils/types/propsTypes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PetDiseaseType } from "../../utils/types/basicTypes";
import { diseasesData } from "../../utils/mockups/adminMenu";
import { handleChangeDate } from "../../utils/functions/handlers";
import { useState } from "react";

const AddPetDiseaseModal = (props: EditPetModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newDisease, setNewDisease] = useState<PetDiseaseType>({
    startDate: "",
    endDate: "",
    diseaseId: 0,
    petId: typeof props.data === "number" ? props.data : 0,
    symptoms: "",
    status: "active",
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
          width: {xs:'90%', md:"60%", lg:'40%', xl:'30%'},
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
        options={diseasesData.map((option) => option.attributes.name)}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Nazwa choroby" />}
        />
        <TextField
          fullWidth
          label="Objawy"
          multiline
          rows={4}
          variant="outlined"
        
        >

        </TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{
                  flexGrow: 1,
                }}
                format="DD-MM-YYYY"
                label="Data rozpoczęcia choroby"
                onChange={(value: Dayjs | null) => dateChange(value)}
              />
            </DemoContainer>
          </LocalizationProvider>

          <Button variant="contained">Zapisz</Button>
        </Box>
    </Modal>
  );
};

export default AddPetDiseaseModal;
