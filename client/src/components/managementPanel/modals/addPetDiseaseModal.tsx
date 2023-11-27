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
import { handleChangeDate, handleTextChange } from "../../../utils/functions/handlers";
import { useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ErrorInput } from "../../../utils/types/errorInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PetDiseaseModalProps } from "../../../utils/types/propsTypes";
import { PetDiseaseType } from "../../../utils/types/basicTypes";
import { createAnimalDisease } from "../../../utils/services/posts";
import { validateForm } from "../../../utils/functions/validators";

const AddPetDiseaseModal = (props: PetDiseaseModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);

  const [newDisease, setNewDisease] = useState<PetDiseaseType>({
    id: 0,
    attributes: {
      startDate: dayjs().format("YYYY-MM-DD"),
      endDate: dayjs().format("YYYY-MM-DD"),
      status: "W trakcie",
      animal: props.animal,
      disease:props.diseases[3],
      symptoms: "",
    },
  });

  const [ErrorList, setErrorList] = useState<ErrorInput>({
    startDate:{
      status: false,
    },
    endDate:{
      status: false,
    },
    disease:{
      status: false,
    },
    symptoms:{
      status: false,
    },
    animal:{
      status: false,
    },
  })
  const dateChange = (value: Dayjs | null, field:string) => {
    if (value === null) return;
    handleChangeDate(value.format('YYYY-MM-DD'), setNewDisease, field)
  }
  
  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewDisease)
  }

  const selectChange = (e: any, newValue:string | null) => {
    const disease = props.diseases.find((disease) => disease.attributes.name === newValue)
    if(disease)
    setNewDisease({
      ...newDisease,
      attributes:{
        ...newDisease.attributes,
        disease: disease
      }
    })
  }

  const sendForm = () => {
    validateForm(newDisease.attributes, setErrorList).then((res:boolean) => {
      if(res){
        createAnimalDisease(newDisease).then((res:boolean) => {
          if(res){
            props.setRefresh(true);
            handleClose();
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
        options={props.diseases.map((option) => option.attributes.name)}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Nazwa choroby" />}
        onChange={selectChange}
        />
        <TextField
          fullWidth
          label="Objawy"
          multiline
          rows={4}
          variant="outlined"
          name="symptoms"
          error={ErrorList.symptoms.status}
          onChange={textChange}
        
        >

        </TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{
                  flexGrow: 1,
                }}
                format="YYYY-MM-DD"
                label="Data rozpoczęcia choroby"
                value={dayjs(newDisease.attributes.startDate)}
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
                label="Przewidywana data zakończenia choroby"
                value={dayjs(newDisease.attributes.endDate)}
                onChange={(value: Dayjs | null) => dateChange(value, "endDate")}
              />
            </DemoContainer>
          </LocalizationProvider>

          <Button variant="contained" onClick={() => sendForm()}>Zapisz</Button>
        </Box>
    </Modal>
  );
};

export default AddPetDiseaseModal;
