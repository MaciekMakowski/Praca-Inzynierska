import { AnimalType, PetManagementProps } from "../../utils/types/basicTypes";
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
import { handleChangeDate, handleSelectChange, handleTextChange } from "../../utils/functions/handlers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const AddAnimalForm = (props:PetManagementProps) => {
  const theme = useTheme();
  const [newAnimal, setNewAnimal] = useState<AnimalType>({
    name: "",
    findPlace: "",
    race:  "",
    number: 0,
    species:  "",
    weight:  0,
    sex:  "",
    birthDate: dayjs().format('DD-MM-YYYY'),
    desc: "",
    isIll: false,
    isIsolated:  false,
    status: "New",
  });

  const textChange = (event: ChangeEvent<HTMLInputElement>) =>{
    handleTextChange(event, setNewAnimal)
  }

  const selectChange = (event: SelectChangeEvent) => {
    handleSelectChange(event, setNewAnimal)
  }
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format('DD-MM-YYYY'), setNewAnimal, 'birthDate')
  }

  useEffect(() => {
    if(!props.data) return;
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
        value={newAnimal.name}
        variant="outlined"
        label="Imię"
        name="name"
        color="primary"
        onChange={textChange}
      />
      <TextField
      value={newAnimal.findPlace}
        variant="outlined"
        label="Miejsce znalezienia"
        name="findPlace"
        color="primary"
        onChange={textChange}
      />
      <TextField
        value={newAnimal.race}
        variant="outlined"
        label="Rasa"
        name="race"
        color="primary"
        onChange={textChange}
      />
      <TextField
        value={newAnimal.number}
        variant="outlined"
        label="Numer"
        name="number"
        type="number"
        color="primary"
        onChange={textChange}
      />
      <TextField
        value={newAnimal.weight}
        variant="outlined"
        label="Waga"
        name="weight"
        type="number"
        color="primary"
        onChange={textChange}
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
          value={newAnimal.species}
          onChange={selectChange}
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
          value={newAnimal.sex}
          onChange={selectChange}
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
            format="DD-MM-YYYY"
            value={dayjs(newAnimal.birthDate)}
            label="Data urodzenia"
            onChange={(value: Dayjs | null) => dateChange(value)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Button variant="contained" onClick={() => console.log(newAnimal)}>
        {props.data ? "Zapisz" : "Dodaj"}
      </Button>
    </Box>
  );
};

export default AddAnimalForm;
