import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { DiseaseManagementProps, DiseaseType } from "../../utils/types/basicTypes";
import { useEffect, useState } from "react";

import { handleTextChange } from "../../utils/functions/handlers";

const AddDiseaseForm = (props:DiseaseManagementProps) => {
  const theme = useTheme();
  const [newDisase, setNewDisease] = useState<DiseaseType>({
    number: 0,
    name: "",
    description: "",
    treatment: "",
  });


  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e, setNewDisease);
  }
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
        value={newDisase.name}
      />
      <TextField
        label="Objawy"
        name="description"
        multiline
        fullWidth
        rows={4}
        onChange={textChange}
        value={newDisase.description}
      />
      <TextField
        label="Leczenie"
        name="treatment"
        fullWidth
        multiline
        rows={4}
        onChange={textChange}
        value={newDisase.treatment}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={() => console.log(newDisase)}
      >
        Dodaj
      </Button>
    </Box>
  );
};

export default AddDiseaseForm;
