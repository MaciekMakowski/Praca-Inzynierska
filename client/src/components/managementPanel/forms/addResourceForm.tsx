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
  CategoryList,
  SubcategoryList,
  UnitList,
} from "../../../utils/mockups/selects";
import { ChangeEvent, useEffect, useState } from "react";
import {
  ResourceType,
  ResourceTypeType,
} from "../../../utils/types/basicTypes";
import dayjs, { Dayjs } from "dayjs";
import {
  handleSelectChange,
  handleTextChange,
} from "../../../utils/functions/handlers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { handleChangeDate } from "../../../utils/functions/handlers";

type AddResourceFormProps = {
  data?: ResourceType;
  resourceTypes: ResourceTypeType[];
};

const AddResourceForm = (props: AddResourceFormProps) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [newResource, setNewResource] = useState<ResourceType>({
    id: 0,
    attributes: {
      name: "",
      type: 0,
      subtype: 0,
      quantity: 0,
      unit: "",
      expirationDate: null,
    },
  });

  const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const selectChange = (event: SelectChangeEvent) => {
    handleSelectChange(event, setNewResource);
  };
  const textChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleTextChange(event, setNewResource);
  };

  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(
      value.format("DD-MM-YYYY"),
      setNewResource,
      "expirationDate"
    );
  };

  useEffect(() => {
    if (!props.data) return;
    setNewResource(props.data);
    setChecked(props.data.attributes.expirationDate !== null);
  }, [props.data]);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        minWidth: props.data ? "100%" : "350px",
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
        onChange={textChange}
        value={newResource.attributes.name}
      />
      <TextField
        variant="outlined"
        label="Ilość"
        name="findPlace"
        color="primary"
        onChange={textChange}
        value={newResource.attributes.quantity}
      />
      <FormControl>
        <InputLabel>Jedonstka</InputLabel>
        <Select
          label="Jednostka"
          name="unit"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue=""
          value={newResource.attributes.unit}
          onChange={selectChange}
        >
          {UnitList.map((unit) => {
            return (
              <MenuItem key={unit.id} value={unit.name}>
                {unit.name}
              </MenuItem>
            );
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
          onChange={selectChange}
        >
          {props.resourceTypes.map((res) => {
            return (
              <MenuItem key={res.id} value={res.id}>
                {res.attributes.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Podkategoria</InputLabel>
        <Select
          label="Podkategoria"
          name="subtype"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
          }}
          defaultValue=""
          onChange={selectChange}
        >
          {props.resourceTypes
            .find((item) => item.id === newResource.attributes.type)
            ?.attributes.subtypes.map((subtype) => (
              <MenuItem key={subtype.id} value={subtype.id}>
                {subtype.attributes.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {checked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              format="DD-MM-YYYY"
              value={dayjs(newResource.attributes.expirationDate)}
              label="Data przydatności"
              onChange={(value: Dayjs | null) => dateChange(value)}
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
        <Checkbox onChange={handleCheckBoxChange} checked={checked} />
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
