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
import { Dayjs } from "dayjs";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import {
  handleSelectChange,
  handleTextChange,
} from "../../../utils/functions/handlers";
import {
  ResourceType,
  ResourceTypeType,
} from "../../../utils/types/basicTypes";

import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { SetStateAction } from "react";
import { handleChangeDate } from "../../../utils/functions/handlers";
import { validateForm } from "../../../utils/functions/validators";
import { ResourceStatus } from "../../../utils/mockups/items";
import { UnitList } from "../../../utils/mockups/selects";
import { createResource } from "../../../utils/services/posts";
import { updateResource } from "../../../utils/services/puts";
import { ErrorInput } from "../../../utils/types/errorInput";

type AddResourceFormProps = {
  title: string;
  data?: ResourceType;
  resourceTypes: ResourceTypeType[];
  setRefresh?: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isNew: boolean;
};

const emptyResource: ResourceType = {
  id: 0,
  attributes: {
    name: "",
    type: { id: 0, attributes: { name: "", subtypes: [] } },
    subtype: { id: 0, attributes: { name: "" } },
    quantity: 0,
    unit: "",
    expirationDate: null,
    status: "Dostępne",
  },
};

const AddResourceForm = (props: AddResourceFormProps) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [newResource, setNewResource] = useState<ResourceType>(emptyResource);
  const [isValid, setIsValid] = useState(false);

  const checkIfValid = () => {
    if (newResource.attributes.name.length < 3) return false;
    if (newResource.attributes.quantity < 0) return false;
    if (newResource.attributes.unit.length < 1) return false;
    if (newResource.attributes.type.id === 0) return false;
    if (newResource.attributes.subtype?.id === 0) return false;
    if (newResource.attributes.expirationDate === null && checked) return false;
    return true;
  };

  const [ErrorList, setErrorList] = useState<ErrorInput>({
    name: {
      status: false,
    },
    type: {
      status: false,
    },
    subtype: {
      status: false,
    },
    quantity: {
      status: false,
    },
    unit: {
      status: false,
    },
    expirationDate: {
      status: false,
    },
  });

  const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const selectChange = (e: SelectChangeEvent) => {
    handleSelectChange(e, setNewResource);
  };

  const selectChangeType = (e: SelectChangeEvent) => {
    const resourceType = props.resourceTypes.find(
      (resType) => resType.attributes.name === e.target.value
    );
    if (resourceType)
      setNewResource({
        ...newResource,
        attributes: {
          ...newResource.attributes,
          [e.target.name]: resourceType,
        },
      });
  };
  const selectChangeSubtype = (e: SelectChangeEvent) => {
    const subtype = newResource.attributes.type.attributes.subtypes?.find(
      (subtype) => subtype.attributes.name === e.target.value
    );
    if (subtype)
      setNewResource({
        ...newResource,
        attributes: {
          ...newResource.attributes,
          [e.target.name]: subtype,
        },
      });
  };
  const textChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleTextChange(event, setNewResource);
  };

  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(
      value.format("YYYY-MM-DD"),
      setNewResource,
      "expirationDate"
    );
  };

  const sendForm = () => {
    if (props.isNew) {
      validateForm(newResource.attributes, setErrorList).then((res) => {
        if (res) {
          createResource(newResource).then((res) => {
            if (res) setNewResource(emptyResource);
            if (props.setRefresh) props.setRefresh(true);
          });
        }
      });
    } else {
      validateForm(newResource.attributes, setErrorList).then((res) => {
        if (res) {
          updateResource(newResource).then((res) => {
            if (res) props.setRefresh && props.setRefresh(true);
            props.setOpen && props.setOpen(false);
          });
        }
      });
    }
  };

  useEffect(() => {
    if (!props.data) return;
    setNewResource(props.data);
    setChecked(props.data.attributes.expirationDate !== null);
  }, [props.data]);

  useEffect(() => {
    setIsValid(checkIfValid());
  }, [newResource]);

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
        {props.title}
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
        name="quantity"
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
          value={newResource.attributes.type.attributes.name}
          defaultValue=""
          onChange={selectChangeType}
        >
          {props.resourceTypes.map((res) => {
            return (
              <MenuItem key={res.id} value={res.attributes.name}>
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
          value={newResource.attributes.subtype?.attributes.name}
          defaultValue=""
          onChange={selectChangeSubtype}
        >
          {newResource.attributes.type.id != 0 ? (
            props.resourceTypes &&
            props.resourceTypes
              .find((item) => item.id === newResource.attributes.type.id)
              ?.attributes.subtypes?.map((subtype) => (
                <MenuItem key={subtype.id} value={subtype.attributes.name}>
                  {subtype.attributes.name}
                </MenuItem>
              ))
          ) : (
            <MenuItem value="" disabled>
              Wybierz rodzaj
            </MenuItem>
          )}
        </Select>
      </FormControl>
      {checked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              format="YYYY-MM-DD"
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
      {!props.isNew ? (
        <>
          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              name="status"
              variant="outlined"
              sx={{
                color: theme.palette.text.primary,
              }}
              value={newResource.attributes.status}
              defaultValue=""
              onChange={selectChange}
            >
              {ResourceStatus.map((value, i) => (
                <MenuItem key={i} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      ) : null}
      <Button
        variant="contained"
        color="primary"
        onClick={() => sendForm()}
        disabled={!isValid}
      >
        {props.title}
      </Button>
    </Box>
  );
};

export default AddResourceForm;
