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
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import {
  handleChangeDate,
  handleSelectChange,
  handleTextChange,
} from "../../../utils/functions/handlers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import {
  EditPetDiseaseModalProps
} from "../../../utils/types/propsTypes";
import { ErrorInput } from "../../../utils/types/errorInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  PetDiseaseType,
} from "../../../utils/types/basicTypes";
import { diseaseStatusList } from "../../../utils/mockups/adminMenu";
import { updatePetDisease } from "../../../utils/services/puts";
import { useState } from "react";
import { validateForm } from "../../../utils/functions/validators";

const EditPetDiseaseModal = (props: EditPetDiseaseModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newPetDisease, setNewPetDisease] = useState<PetDiseaseType>(props.data);
  const [ErrorList, setErrorList] = useState<ErrorInput>({
    symptoms:{
      status: false,
    },
    startDate:{
      status: false,
    },
    endDate:{
      status: false,
    },
    status:{
      status: false,
    },
  });

  const dateChange = (value: Dayjs | null, fieldName: string) => {
    if (value === null) return;
    handleChangeDate(value.format("YYYY-MM-DD"), setNewPetDisease, fieldName);
  };

  const selectChange = (event: SelectChangeEvent) => {
    handleSelectChange(event, setNewPetDisease);
  };

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(event, setNewPetDisease);
  }

  const sendForm = () => {
    validateForm(newPetDisease.attributes, setErrorList).then((res) => {
      if(res){
        updatePetDisease(newPetDisease).then((res) => {
          if(res){
            props.setOpen(false);
            props.setRefresh(true);
          }
        })
      }
    })
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
            Edytuj chorobę zwierzęcia
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField
          label="Objawy"
          fullWidth
          name="symptoms"
          multiline
          minRows={4}
          value={newPetDisease.attributes.symptoms}
          onChange={textChange}
        ></TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              format="YYYY-MM-DD"
              label="Data rozpoczęcia choroby"
              value={dayjs(newPetDisease.attributes.startDate)}
              onChange={(value: Dayjs | null) => dateChange(value, "startDate")}
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              format="YYYY-MM-DD"
              label="Data zakończenia choroby"
              value={dayjs(newPetDisease.attributes.endDate)}
              onChange={(value: Dayjs | null) => dateChange(value, "endDate")}
            />
          </DemoContainer>
        </LocalizationProvider>
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Select
            label="Rodzaj"
            name="status"
            variant="outlined"
            sx={{
              color: theme.palette.text.primary,
            }}
            value={newPetDisease.attributes.status}
            onChange={selectChange}
          >
            {diseaseStatusList.map((status, index) => {
              return (
                <MenuItem key={index} value={status.name}>
                  {status.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Button variant="contained" onClick={() => sendForm()}>Zabisz</Button>
      </Box>
    </Modal>
  );
};

export default EditPetDiseaseModal;
