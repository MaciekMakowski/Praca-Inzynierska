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
import {
  handleSelectChange,
  handleTextChange,
} from "../../../utils/functions/handlers";

import { ChangeEvent } from "react";
import { ErrorInput } from "../../../utils/types/errorInput";
import { createResourceType } from "../../../utils/services/posts";
import { useState } from "react";
import { validateDate } from "@mui/x-date-pickers/internals";
import { validateForm } from "../../../utils/functions/validators";

const emptyResource = {
  id: 0,
  attributes: {
    name: "",
    category: 0,
  },
};

const AddOrDelResourceTypeForm = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);
  const [newResource, setNewResource] = useState(emptyResource);
  const [errorList, setErrorList] = useState<ErrorInput>({
    name: {
      status: false,
    },
    category: {
      status: false,
    },
  });

  const textChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewResource);
  };
  const selectChange = (e: SelectChangeEvent) => {
    handleSelectChange(e, setNewResource);
  };

  const sendForm = () => {
    validateForm(newResource.attributes, setErrorList).then((res) => {
      if (res) {
        createResourceType(newResource, newResource.attributes.category).then(
          (res) => {
            if (res) {
              console.log("Udało się");
            } else {
              console.log("Nie udało się");
            }
          }
        );
      }
    });
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
            error={errorList.name.status}
          />
          <FormControl>
            <InputLabel>Kategoria główna</InputLabel>
            <Select
              label="Kategoria główna"
              name="category"
              variant="outlined"
              error={errorList.category.status}
              sx={{
                color: theme.palette.text.primary,
              }}
              defaultValue={"Brak"}
              onChange={selectChange}
            >
              <MenuItem value={-1}>Brak</MenuItem>
              <MenuItem value={1}>Jedzenie</MenuItem>
              <MenuItem value={2}>Higiena</MenuItem>
              <MenuItem value={3}>Zabawka</MenuItem>
              <MenuItem value={4}>Koce</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => sendForm()}
          >
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
              name="category"
              variant="outlined"
              sx={{
                color: theme.palette.text.primary,
              }}
              defaultValue={0}
              // value={newAnimal.species}
              // onChange={handleSelectChange}
            >
              <MenuItem value={1}>Jedzenie</MenuItem>
              <MenuItem value={2}>Higiena</MenuItem>
              <MenuItem value={3}>Zabawka</MenuItem>
              <MenuItem value={4}>Koce</MenuItem>
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
