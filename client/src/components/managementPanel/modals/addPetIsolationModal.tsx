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
} from "../../../utils/functions/handlers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { EditPetModalProps } from "../../../utils/types/propsTypes";
import { ErrorInput } from "../../../utils/types/errorInput";
import { IsolationType } from "../../../utils/types/basicTypes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createIsolation } from "../../../utils/services/posts";
import dayjs from "dayjs";
import { setAnimalAsIsolated } from "../../../utils/functions/setters";
import { updateAnimal } from "../../../utils/services/puts";
import { useState } from "react";
import { validateForm } from "../../../utils/functions/validators";

const AddIsolationModal = (props: EditPetModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const emptyIsolation: IsolationType = {
    id: 0,
    attributes: {
      startDate: dayjs().format("YYYY-MM-DD"),
      endDate: dayjs().format("YYYY-MM-DD"),
      reason: "",
      status: "Oczekująca",
      animal: props.animal,
      description: "",
    },
  }
  const [newIsolation, setNewIsolation] = useState<IsolationType>(emptyIsolation);

  const [ErrorList, setErrorList] = useState<ErrorInput>({
    startDate:{
      status: false,
    },
    endDate:{
      status: false,
    },
    reason:{
      status: false,
    },
    description:{
      status: false,
    },
    animal:{
      status: false,
    },
    status:{
      status: false,
    }

  })


  const dateChange = (value: Dayjs | null, field:string) => {
    if (value === null) return;
    handleChangeDate(value.format("YYYY-MM-DD"), setNewIsolation, field);
  };
  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewIsolation);
  };

  const sendForm = () => {
    validateForm(newIsolation.attributes, setErrorList).then((res:boolean) => {
      if(res){
        createIsolation(newIsolation).then((res:boolean) => {
            props.setRefresh(true);
            handleClose();
            setNewIsolation(emptyIsolation)
        });
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
          error={ErrorList.reason.status}
        ></TextField>
        <TextField
          multiline
          label="Opis"
          name="description"
          variant="outlined"
          value={newIsolation.attributes.description}
          rows={9}
          onChange={textChange}
          error={ErrorList.description.status}
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
              value={dayjs(newIsolation.attributes.endDate)}
              format="YYYY-MM-DD"
              label="Data zakończenia izolacji"
              onChange={(value: Dayjs | null) => dateChange(value, "endDate")}
            />
          </DemoContainer>
        </LocalizationProvider>

        <Button variant="contained" onClick={() => sendForm()}>Zapisz</Button>
      </Box>
    </Modal>
  );
};

export default AddIsolationModal;
