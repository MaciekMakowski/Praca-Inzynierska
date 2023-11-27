import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  handleChangeDate,
  handleSelectChange,
  handleTextChange,
} from "../../../utils/functions/handlers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AnimalType } from "../../../utils/types/basicTypes";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ErrorInput } from "../../../utils/types/errorInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PetManagementProps } from "../../../utils/types/propsTypes";
import { createAnimal } from "../../../utils/services/posts";
import { updateAnimal } from "../../../utils/services/puts";
import { validateForm } from "../../../utils/functions/validators";

const AddAnimalForm = (props: PetManagementProps) => {
  const theme = useTheme();
  const [newAnimal, setNewAnimal] = useState<AnimalType>({
    id: 0,
    attributes: {
      name: "",
      findPlace: "",
      race: "",
      species: "",
      weight: 0,
      sex: "",
      birthDate: dayjs().format("YYYY-MM-DD"),
      description: "Tu dodaj opis",
      isIll: false,
      isIsolated: false,
      toAdoption: false,
      adopted: false,
      images: null,
      dateOfAdmission: dayjs().format("YYYY-MM-DD"),
    },
  });
  const [errorList, setErrorList] = useState<ErrorInput>({
    name: {
      status: false,
    },
    findPlace: {
      status: false,
    },
    birthDate: {
      status: false,
    },
    race: {
      status: false,
    },
    species: {
      status: false,
    },
    weight: {
      status: false,
    },
    sex: {
      status: false,
    },
  });

  const sendForm = () => {
    validateForm(newAnimal.attributes, setErrorList).then((res) => {
      if (res) {
        if (props.isNew) {
          createAnimal(newAnimal).then((res) => {
            if(res){
              setNewAnimal({
                id: 0,
                attributes: {
                  name: "",
                  findPlace: "",
                  race: "",
                  species: "",
                  weight: 0,
                  sex: "",
                  birthDate: dayjs().format("YYYY-MM-DD"),
                  description: "Tu dodaj opis",
                  isIll: false,
                  isIsolated: false,
                  toAdoption: false,
                  adopted: false,
                  dateOfAdmission: dayjs().format("YYYY-MM-DD"),
                  images: null,
                },
              });
              props.setRefresh(true);
            }else{
              alert("Nie udało się dodać zwierzęcia");
            }
        });
      } else {
        updateAnimal(newAnimal).then((res) => {
          if(res){
            props.setRefresh(true);
            if(props.setOpen) props.setOpen(false);
          }else{
            alert("Nie udało się zaktualizować zwierzęcia");
          }
        });
      }
      }
    });
  };

  const textChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleTextChange(event, setNewAnimal);
  };

  const selectChange = (event: SelectChangeEvent) => {
    handleSelectChange(event, setNewAnimal);
  };
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format("YYYY-MM-DD"), setNewAnimal, "birthDate");
  };

  useEffect(() => {
    if (!props.data) return;
    setNewAnimal(props.data);
  }, [props.data]);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        minWidth: "350px",
        height: "fit-content",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: theme.shadows[3],
      }}
    >
      <Typography variant="h5" color={theme.palette.text.primary}>
        {props.data ? "Edytuj zwierzę" : "Dodaj zwierzę"}
      </Typography>
      <TextField
        value={newAnimal.attributes.name}
        variant="outlined"
        label="Imię"
        name="name"
        color="primary"
        onChange={textChange}
        error={errorList.name.status}
      />
      <TextField
        value={newAnimal.attributes.findPlace}
        variant="outlined"
        label="Miejsce znalezienia"
        name="findPlace"
        color="primary"
        onChange={textChange}
        error={errorList.findPlace.status}
      />
      <TextField
        value={newAnimal.attributes.race}
        variant="outlined"
        label="Rasa"
        name="race"
        color="primary"
        onChange={textChange}
        error={errorList.race.status}
      />
      <TextField
        value={newAnimal.attributes.weight}
        variant="outlined"
        label="Waga"
        name="weight"
        type="number"
        color="primary"
        onChange={textChange}
        error={errorList.weight.status}
      />
      <FormControl>
        <InputLabel>Gatunek</InputLabel>
        <Select
          label="Gatunek"
          name="species"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue={"Gatunek"}
          value={newAnimal.attributes.species}
          onChange={selectChange}
          error={errorList.species.status}
        >
          <MenuItem value={"Pies"}>Pies</MenuItem>
          <MenuItem value={"Kot"}>Kot</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Płeć</InputLabel>
        <Select
          label="Płeć"
          name="sex"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue={"Płeć"}
          value={newAnimal.attributes.sex}
          onChange={selectChange}
          error={errorList.sex.status}
        >
          <MenuItem value={"Samiec"}>Samiec</MenuItem>
          <MenuItem value={"Samica"}>Samica</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            sx={{
              flexGrow: 1,
            }}
            format="YYYY-MM-DD"
            value={dayjs(newAnimal.attributes.birthDate)}
            label="Data urodzenia"
            disableFuture
            onChange={(value: Dayjs | null) => dateChange(value)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Button variant="contained" onClick={() => sendForm()}>
        {props.data ? "Zapisz" : "Dodaj"}
      </Button>
    </Box>
  );
};

export default AddAnimalForm;
