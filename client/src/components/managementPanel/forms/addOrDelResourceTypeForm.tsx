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
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  handleSelectChange,
  handleTextChange,
} from "../../../utils/functions/handlers";

import { ErrorInput } from "../../../utils/types/errorInput";
import { ResourceSubtypeType } from "../../../utils/types/basicTypes";
import { createResourceType } from "../../../utils/services/posts";
import { deleteResourceType } from "../../../utils/services/deletes";
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

type AddOrDelResourceTypeFormProps = {
  setRefresh: Dispatch<SetStateAction<boolean>>;
  resourceTypes: ResourceSubtypeType[];
};

const AddOrDelResourceTypeForm = (props:AddOrDelResourceTypeFormProps) => {
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

  const selectChangeType = (e: SelectChangeEvent) => {
    setNewResource((prev) => ({...prev, id: parseInt(e.target.value as string)}))
  }

  const sendForm = () => {
    validateForm(newResource.attributes, setErrorList).then((res) => {
      if (res) {
        createResourceType(newResource, newResource.attributes.category).then(
          (res) => {
            if (res) {
              props.setRefresh(true);
              setNewResource(emptyResource);
              setSelected(false);
            }
          }
        );
      }
    });
  };

  const deleteType = () => {
    deleteResourceType(newResource.id).then((res) => {
      if (res) {
        props.setRefresh(true);
        setNewResource(emptyResource);
        setSelected(false);
      }
    })
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
              {props.resourceTypes.map((type) => {
                return(
                  <MenuItem key={type.id} value={type.id}>{type.attributes.name}</MenuItem>
                )
              })}
              
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
              onChange={selectChangeType}
            >
              {props.resourceTypes.map((type) => {
                return(
                  <MenuItem key={type.id} value={type.id}>{type.attributes.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <Button variant="contained" color="warning" onClick={() => deleteType()}>
            Usuń
          </Button>
        </>
      )}
    </Box>
  );
};

export default AddOrDelResourceTypeForm;
