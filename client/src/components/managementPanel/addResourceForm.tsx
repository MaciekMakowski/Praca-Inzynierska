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
import { CategoryList, SubcategoryList, UnitList } from "../../utils/mockups/selects";
import { ChangeEvent, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ResourceType } from "../../utils/types/basicTypes";
import { handleSelectChange } from "../../utils/functions/handlers";

const AddResourceForm = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [newResource, setNewResource] = useState<ResourceType>({
    id: 0,
    name: "",
    type: "",
    subtype: "",
    quantity: 0,
    unit: "",
    expirationDate: null,
  })

  const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const selectChange =(event: SelectChangeEvent) => {
    handleSelectChange(event, setNewResource);
    console.log(newResource.type)
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
        Dodaj zasób
      </Typography>
      <TextField
        variant="outlined"
        label="Nazwa"
        name="name"
        color="primary"
        //onChange={handleTextChange}
      />
      <TextField
        variant="outlined"
        label="Ilość"
        name="findPlace"
        color="primary"
        //onChange={handleTextChange}
      />
      <FormControl>
        <InputLabel>Jedonstka</InputLabel>
        <Select
          label="Jednostka"
          name="species"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue=""
          // value={newAnimal.species}
          // onChange={handleSelectChange}
        >
          {UnitList.map((unit) => {
            return(
              <MenuItem key={unit.id} value={unit.id}>{unit.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Rodzaj</InputLabel>
        <Select
          label="Rodzaj"
          name="type"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue=""
          value={newResource.type}
          onChange={selectChange}
        >
          {CategoryList.map((cat) => {
            return(
              <MenuItem key={cat.id} value={cat.name}>{cat.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Podkategoria</InputLabel>
        <Select
          label="Podkategoria"
          name="type"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue=""
          // value={newAnimal.species}
          // onChange={handleSelectChange}
        >
          {SubcategoryList.map((cat) => {
              if(cat.categoryId === newResource.type){
                return <MenuItem key={cat.id} value={cat.name}>{cat.name}</MenuItem>
              }
              
          })}
        </Select>
      </FormControl>
      {checked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              label="Data przydatności" //onChange={(value:Dayjs | null) =>  handleChangeBirthDate(value)}
            />
          </DemoContainer>
        </LocalizationProvider>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox onChange={handleCheckBoxChange} />
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          Posiada datę przydatności
        </Typography>
      </Box>
      <Button variant="contained" color="primary">
        Dodaj
      </Button>
    </Box>
  );
};

export default AddResourceForm;
