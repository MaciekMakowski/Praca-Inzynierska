import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { CategoryList, SubcategoryList, UnitList } from "../../utils/mockups/selects";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ResourceType } from "../../utils/types/basicTypes";
import { SelectChangeEvent } from "@mui/material";
import { handleChangeDate } from "../../utils/functions/handlers";
import { handleSelectChange } from "../../utils/functions/handlers";

type EditIsolationModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: ResourceType;
};

const EditResourceModal = (props: EditIsolationModalProps) => {
  const theme = useTheme();
  const [newResource, setNewResource] = useState<ResourceType>({
    id: 0,
    name: "",
    type: "",
    subtype: "",
    quantity: 0,
    unit: "",
    expirationDate: null,
  });
  const handleClose = () => props.setOpen(false);
  const dateChange = (value: Dayjs | null) => {
    if (value === null) return;
    handleChangeDate(value.format("DD-MM-YYYY"), setNewResource, "startDate");
  };
  const selectChange =(event: SelectChangeEvent) => {
    handleSelectChange(event, setNewResource);
    console.log(newResource.type)
  }

  useEffect(() => {
    setNewResource(props.data);
  }, [props.data]);

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.adminField,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: "60%", lg: "40%", xl: "30%" },
          minWidth: "300px",
          boxSizing: "border-box",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: `${theme.palette.primary.main} 4px solid}`,
          borderRadius: [3],
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" color={theme.palette.text.primary}>
            Edytuj zasób
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField label="Nazwa zasobu" fullWidth value={newResource.name} />
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
                    return <MenuItem key={cat.id} value={cat.name}>{cat.name}</MenuItem>
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
            value={newResource.subtype}
            onChange={selectChange}
          >
            {SubcategoryList.map((cat) => {
                    if(cat.categoryId === newResource.type){
                        return <MenuItem key={cat.id} value={cat.name}>{cat.name}</MenuItem>
                    }
                    
                })}
          </Select>
        </FormControl>
        <TextField label="Ilość" fullWidth value={newResource.name} />
        <FormControl>
          <InputLabel>Jednostka</InputLabel>
          <Select
            label="Jednostka"
            name="unit"
            variant="outlined"
            sx={{
              color: theme.palette.text.primary,
            }}
            defaultValue=""
            value={newResource.unit}
            onChange={selectChange}
          >
                {UnitList.map((unit) => {
                    return <MenuItem key={unit.id} value={unit.name}>{unit.name}</MenuItem>
                })}
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                flexGrow: 1,
              }}
              label="Data terminu ważności"
              defaultValue={dayjs(newResource.expirationDate)}
              onChange={(value: Dayjs | null) => dateChange(value)}
            />
          </DemoContainer>
        </LocalizationProvider>

        <Button variant="contained">Zabisz</Button>
      </Box>
    </Modal>
  );
};

export default EditResourceModal;
