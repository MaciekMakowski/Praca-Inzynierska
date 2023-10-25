import { useState, ChangeEvent } from "react";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AnimalType, PetManagementProps } from "../../utils/types/basicTypes";



const AddAnimalForm = (props:PetManagementProps) => {
  const theme = useTheme();
  const [newAnimal, setNewAnimal] = useState<AnimalType>({
    name: props.data ? props.data.name : "",
    findPlace: props.data ? props.data.findPlace : "",
    race: props.data ? props.data.race : "",
    number: props.data ? props.data.number : 0,
    species: props.data ? props.data.species : "",
    weight: props.data ? props.data.weight : 0,
    sex: props.data ? props.data.sex : "",
    birthDate: props.data ? props.data.birthDate : "",
    desc:props.data ? props.data.desc : "",
    isIll: props.data ? props.data.isIll : false,
    isIsolated: props.data ? props.data.isIsolated : false,
    status:props.data ? props.data.status : "New",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent,
    attributeName: string
  ) => {
    const { value } = event.target;
    const newValue =
      attributeName === "weight"
        ? parseFloat(value)
        : attributeName === "number"
        ? parseFloat(value)
        : value;
    setNewAnimal((prevAnimal) => ({
      ...prevAnimal,
      [attributeName]: newValue,
    }));
  };
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const attributeName = event.target.name;
    if (attributeName) {
      handleChange(event, attributeName);
    }
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    const attributeName = event.target.name;
    if (attributeName) {
      handleChange(event, attributeName);
    }
  };
  const handleChangeBirthDate = (value: Dayjs | null) => {
    if (value === null) return;
    setNewAnimal((prevAnimal) => ({
      ...prevAnimal,
      birthDate: value.format("YYYY-MM-DD"),
    }));
  };
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
        value={props.data && props.data.name}
        variant="outlined"
        label="Imię"
        name="name"
        color="primary"
        onChange={handleTextChange}
      />
      <TextField
      value={props.data && props.data.findPlace}
        variant="outlined"
        label="Miejsce znalezienia"
        name="findPlace"
        color="primary"
        onChange={handleTextChange}
      />
      <TextField
        value={props.data && props.data.race}
        variant="outlined"
        label="Rasa"
        name="race"
        color="primary"
        onChange={handleTextChange}
      />
      <TextField
        value={props.data && props.data.number}
        variant="outlined"
        label="Numer"
        name="number"
        type="number"
        color="primary"
        onChange={handleTextChange}
      />
      <TextField
        value={props.data && props.data.weight}
        variant="outlined"
        label="Waga"
        name="weight"
        type="number"
        color="primary"
        onChange={handleTextChange}
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
          onChange={handleSelectChange}
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
          onChange={handleSelectChange}
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
            defaultValue={props.data && dayjs(props.data.birthDate)}
            label="Data urodzenia"
            onChange={(value: Dayjs | null) => handleChangeBirthDate(value)}
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
