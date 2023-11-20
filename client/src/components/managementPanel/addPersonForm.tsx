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
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { handleChangeDate, handleSelectChange, handleTextChange } from "../../utils/functions/handlers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ErrorInput } from "../../utils/types/errorInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PersonType } from "../../utils/types/basicTypes";
import { createPerson } from "../../utils/services/posts";
import { validateForm } from "../../utils/functions/validators";

type AddPersonFormProps = {
  title: string;
  isNew: boolean;
  type: "volunteers" | "guests";
  setRefresh: Dispatch<SetStateAction<boolean>>;
};

const emptyPerson: PersonType = {
  id: 0,
    attributes: {
      name: "",
    lastName: "",
    birthDate: "",
    sex: "",
    phoneNumber: 0,
    email: "",
    city: "",
    postCode: "",
    address: "",
    pesel: 0,
    }
}

const AddPersonForm = (props: AddPersonFormProps) => {
  const theme = useTheme();
  const [newPerson, setNewPerson] = useState<PersonType>(emptyPerson);

  const [ErrorList, setErrorList] = useState<ErrorInput>({
    name:{
      status: false,
    },
    lastName:{
      status: false,
    },
    birthDate:{
      status: false,
    },
    sex:{
      status: false,
    },
    phoneNumber:{
      status: false,
    },
    email:{
      status: false,
    },
    city:{
      status: false,
    },
    postCode:{
      status: false,
    },
    address:{
      status: false,
    },
    pesel:{
      status: false,
    }
});

  const sendForm = () => {
    validateForm(newPerson.attributes, setErrorList).then((res) => {
      if(res){
        if(props.isNew){
          createPerson(newPerson, props.type).then((res) => {
            if(res){
              setNewPerson(emptyPerson)
              props.setRefresh(true)
            }
          })

        }
      }
    })
  }

  const textChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewPerson); 
  }
  const dateChange = (value: Dayjs | null, filed:string) => {
    if (value === null) return;
    handleChangeDate(value.format("YYYY-MM-DD"), setNewPerson, filed);
  }

  const selectChange = (e: SelectChangeEvent) => {
    handleSelectChange(e, setNewPerson);
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        width: "350px",
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
        {props.title}
      </Typography>
      <TextField
        variant="outlined"
        label="Imię"
        name="name"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.name}
        error={ErrorList.name.status}
      />
      <TextField
        variant="outlined"
        label="Nazwisko"
        name="lastName"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.lastName}
        error={ErrorList.lastName.status}
      />
      <TextField
        variant="outlined"
        label="PESEL"
        name="pesel"
        type="number"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.pesel}
        error={ErrorList.pesel.status}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            sx={{ width: "100%" }}
            label="Data urodzenia"
            value={dayjs(newPerson.attributes.birthDate)}
            onChange={(value: Dayjs | null) => dateChange(value, "birthDate")}
          />
        </DemoContainer>
      </LocalizationProvider>
      <FormControl>
        <InputLabel>Płeć</InputLabel>
        <Select
          label="Płeć"
          name="sex"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue="Płeć"
          value={newPerson.attributes.sex}
          onChange={selectChange}
          error={ErrorList.sex.status}
        >
          <MenuItem value={"Kobieta"}>Kobieta</MenuItem>
          <MenuItem value={"Mężczyzna"}>Mężczyzna</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        label="Numer telefonu"
        name="phoneNumber"
        type="number"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.phoneNumber}
        error={ErrorList.phoneNumber.status}
      />
      <TextField
        variant="outlined"
        label="E-mail"
        name="email"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.email}
        error={ErrorList.email.status}
      />
      <TextField
        variant="outlined"
        label="Miasto"
        name="city"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.city}
        error={ErrorList.city.status}
      />
      <TextField
        variant="outlined"
        label="Kod pocztowy"
        name="postCode"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.postCode}
        error={ErrorList.postCode.status}
      />
      <TextField
        variant="outlined"
        label="Adres"
        name="address"
        color="primary"
        onChange={textChange}
        value={newPerson.attributes.address}
        error={ErrorList.address.status}
      />
      <Button variant="contained" onClick={() => sendForm()}>
        Dodaj
      </Button>
    </Box>
  );
};

export default AddPersonForm;
