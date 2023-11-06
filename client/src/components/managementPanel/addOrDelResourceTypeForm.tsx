import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { useState } from "react";

const AddOrDelResourceTypeForm = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);

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
            //onChange={handleTextChange}
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
          defaultValue="Kategoria główna"
          // value={newAnimal.species}
          // onChange={handleSelectChange}
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
