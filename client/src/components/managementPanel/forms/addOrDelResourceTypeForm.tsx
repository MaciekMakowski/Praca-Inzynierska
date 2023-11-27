import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { handleSelectChange, handleTextChange } from "../../../utils/functions/handlers";

import { ChangeEvent } from "react";
import { ErrorInput } from "../../../utils/types/errorInput";
import { useState } from "react";
import { validateDate } from "@mui/x-date-pickers/internals";
import { validateForm } from "../../../utils/functions/validators";

const emptyResource = {
  id: 0,
  attributes: {
    name: "",
    category: ""
  },
};

const AddOrDelResourceTypeForm = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);
  const [newResource, setNewResource] = useState(emptyResource);
  const [errorList, setErrorList] = useState<ErrorInput>({
    name:{
      status: false,
    },
    category:{
      status: false,
    }
  });

  const textChange= (e:ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewResource)
  }
  const selectChange = (e:SelectChangeEvent) => {
    handleSelectChange(e, setNewResource)
  }

  const sendForm = () => {
    validateForm(newResource.attributes, setErrorList).then((res) => {
      if(res){
        
      }
    });
  }


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
        Rodzaje zasobów
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button variant="text" onClick={() => setSelected(false)}>
          Dodaj
        </Button>
        <Button variant="text" onClick={() => setSelected(true)}>
          Usuń
        </Button>
      </Box>
      {!selected && (
        <>
          <TextField
            variant="outlined"
            label="Nazwa"
            name="name"
            color="primary"
            onChange={textChange}
          />
          <FormControl>
        <InputLabel>Kategoria główna</InputLabel>
        <Select
          label="Kategoria główna"
          name="type"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          onChange={selectChange}
        >
          <MenuItem value={4}>Brak</MenuItem>
          <MenuItem value={1}>Jedzenie</MenuItem>
          <MenuItem value={2}>Higiena</MenuItem>
          <MenuItem value={3}>Zabawka</MenuItem>
          <MenuItem value={3}>Koce</MenuItem>
        </Select>
      </FormControl>
          <Button variant="contained" color="primary">
            Dodaj
          </Button>
        </>
      )}
      {selected && (
        <>
          <FormControl>
            <InputLabel>Rodzaj</InputLabel>
            <Select
              label="Rodzaj"
              name="type"
              variant="outlined"
              sx={{
                color: theme.palette.text.primary,
              }}
              defaultValue="Rodzaj"
              // value={newAnimal.species}
              // onChange={handleSelectChange}
            >
              <MenuItem value={1}>Jedzenie</MenuItem>
              <MenuItem value={2}>Higiena</MenuItem>
              <MenuItem value={3}>Zabawka</MenuItem>
              <MenuItem value={3}>Koce</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="warning">
            Usuń
          </Button>
        </>
      )}
    </Box>
  );
};

export default AddOrDelResourceTypeForm;
