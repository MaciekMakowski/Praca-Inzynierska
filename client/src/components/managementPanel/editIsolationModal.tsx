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
} from "../../utils/functions/handlers";
import { useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { EditIsolationModalProps } from "../../utils/types/propsTypes";
import { ErrorInput } from "../../utils/types/errorInput";
import { IsolationType } from "../../utils/types/basicTypes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { isolationStatusList } from "../../utils/mockups/adminMenu";
import { uppdateIsolation } from "../../utils/services/puts";
import { validateForm } from "../../utils/functions/validators";

const EditIsolationModal = (props: EditIsolationModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [newIsolation, setNewIsolation] = useState<IsolationType>();

  const [errorList, setErrorList] = useState<ErrorInput>({
    reason: {
      status: false,
    },
    startDate: {
      status: false,
    },
    endDate: {
      status: false,
    },
    status: {
      status: false,
    },
  });

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(event, setNewIsolation);
  };

  const dateChange = (value: Dayjs | null, fieldName: string) => {
    if (value === null) return;
    handleChangeDate(value.format("YYYY-MM-DD"), setNewIsolation, fieldName);
  };

  const selectChange = (event: SelectChangeEvent) => {
    handleSelectChange(event, setNewIsolation);
  };

  const sendForm = () => {
    if (newIsolation)
      validateForm(newIsolation.attributes, setErrorList).then((res) => {
        if (res) {
          uppdateIsolation(newIsolation).then((res) => {
            if (res) {
              props.setOpen(false);
              props.setRefresh(true);
            }
          });
        }
      });
  };

  useEffect(() => {
    if (props.data) {
      setNewIsolation(props.data);
    }
  }, [props.data]);

  return (
    <>
      {newIsolation === undefined ? (
        <>Loading...</>
      ) : (
        <>
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
                name="reason"
                fullWidth
                multiline
                minRows={4}
                value={newIsolation.attributes.reason}
                onChange={textChange}
                error={errorList.reason.status}
              ></TextField>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker

                    sx={{
                      flexGrow: 1,
                    }}
                    format="YYYY-MM-DD"
                    label="Data rozpoczęcia izolacji"
                    value={dayjs(newIsolation.attributes.startDate)}
                    onChange={(value: Dayjs | null) =>
                      dateChange(value, "startDate")
                    }
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
                    label="Data zakończenia izolacji"
                    value={dayjs(newIsolation.attributes.endDate)}
                    onChange={(value: Dayjs | null) =>
                      dateChange(value, "endDate")
                    }
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
                  value={newIsolation.attributes.status}
                  onChange={selectChange}
                >
                  {isolationStatusList.map((status, index) => {
                    return (
                      <MenuItem key={index} value={status.name}>
                        {status.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <Button variant="contained" onClick={() => sendForm()}>
                Zabisz
              </Button>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default EditIsolationModal;
