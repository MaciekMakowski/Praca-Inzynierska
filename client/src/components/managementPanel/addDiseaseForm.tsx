import { Box, Button, TextField, Typography, setRef, useTheme } from "@mui/material";
import { setAsError, unsetAsError } from "../../utils/functions/setters";
import { useEffect, useState } from "react";

import { DiseaseManagementProps } from "../../utils/types/propsTypes";
import { DiseaseType } from "../../utils/types/basicTypes";
import { ErrorInput } from "../../utils/types/errorInput";
import { createDisease } from "../../utils/services/posts";
import { handleTextChange } from "../../utils/functions/handlers";
import { updateDisease } from "../../utils/services/puts";
import { validateForm } from "../../utils/functions/validators";

const AddDiseaseForm = (props:DiseaseManagementProps) => {
  const theme = useTheme();
  const [newDisease, setNewDisease] = useState<DiseaseType>({
    id: 0,
    attributes:{
      name: "",
      description: "",
      treatment: "",
    }
  });
  const [errorList, setErrorList] = useState<ErrorInput>({
    name: {
      status: false,
    },
    description: {
      status: false,
    },
    treatment: {
      status: false,
    },
  });


  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewDisease);
  }

  const sendForm = () => {
    validateForm(newDisease.attributes, setErrorList).then((res) => {
      if (res === true) {
        if(props.isNew){
          createDisease(newDisease).then((res) => {
            if (res) {
              props.setRefresh(true);
              setNewDisease({
                id: 0,
                attributes: {
                  name: "",
                  description: "",
                  treatment: "",
                },
              });
            }else{
              alert("Nie udało się dodać choroby")
            }
          })
        }
        else{
          updateDisease(newDisease).then((res) => {
            if (res) {
              props.setRefresh(true);
              if(props.setOpen) props.setOpen(false);
            }else{
              alert("Nie udało się zaktualizować choroby")
            }
          })
        }
      }
    });
  };

  useEffect(() => {
    if(props.data){
      setNewDisease(props.data)
    }
  },[props.data])

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
      <Typography variant="h6" color={theme.palette.text.primary}>
        Dodaj chorobę
      </Typography>
      <TextField
        fullWidth
        label="Nazwa choroby"
        name="name"
        variant="outlined"
        onChange={textChange}
        value={newDisease.attributes.name}
        error={errorList.name.status}
      />
      <TextField
        label="Objawy"
        name="description"
        multiline
        fullWidth
        rows={4}
        onChange={textChange}
        value={newDisease.attributes.description}
        error={errorList.description.status}
      />
      <TextField
        label="Leczenie"
        name="treatment"
        fullWidth
        multiline
        rows={4}
        onChange={textChange}
        value={newDisease.attributes.treatment}
        error={errorList.treatment.status}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={() => sendForm()}
      >
        Dodaj
      </Button>
    </Box>
  );
};

export default AddDiseaseForm;
