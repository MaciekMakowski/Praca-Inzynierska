import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { DatePicker, TimeField } from "@mui/x-date-pickers";
import { PersonType, VisitType } from "../../../utils/types/basicTypes";
import dayjs, { Dayjs } from "dayjs";
import {
  handleChangeDate,
  handleTextChange,
} from "../../../utils/functions/handlers";
import { useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ErrorInput } from "../../../utils/types/errorInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createVisit } from "../../../utils/services/posts";
import { validateForm } from "../../../utils/functions/validators";

type AddVisitModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: "volunteer" | "guest";
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  person: PersonType;
};

const AddVisitModal = (props: AddVisitModalProps) => {
  const initialVisit: VisitType = {
    id: 0,
    attributes: {
      date: "",
      enterTime: "",
      exitTime: null,
      person: props.person,
    },
  };

  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newVisit, setNewVisit] = useState<VisitType>(initialVisit);
  const [errorList, setErrorList] = useState<ErrorInput>({
    date: {
      status: false,
    },
    enterTime: {
      status: false,
    },
  });

  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format("YYYY-MM-DD"), setNewVisit, "date");
  };
  const timeChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format("HH:mm"), setNewVisit, "enterTime");
  };

  const sendForm = () => {
    validateForm(newVisit.attributes, setErrorList).then((res) => {
      if (res) {
        createVisit(newVisit, props.type).then((res) => {
          if (res) {
            props.setRefresh(true);
            handleClose();
          }
        });
      }
    });
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
          minWidth: { xs: "90%", lg: "500px" },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          border: `${theme.palette.primary.main} 4px solid}`,
          borderRadius: [3],
        }}
      >
        <Box
          sx={{
            width: "100%",
            justifyContent: "space-between",
            gap: "1rem",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              right: 0,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: theme.palette.primary.main,
            }}
          >
            Wprowadź nową wizytę
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxSizing: "border-box",
            padding: "1rem",
            alignItems: "center",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{
                  width: "300px",
                }}
                format="YYYY-MM-DD"
                value={dayjs(newVisit.attributes.date)}
                label="Data wizyty"
                onChange={(value: Dayjs | null) => dateChange(value)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimeField"]}>
              <TimeField
                label="Godzina wejścia"
                name="enterTime"
                format="HH:mm"
                sx={{
                  width: "300px",
                }}
                onChange={(value: Dayjs | null) => timeChange(value)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Button variant="contained" onClick={() => sendForm()}>
            Dodaj wizytę
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddVisitModal;
