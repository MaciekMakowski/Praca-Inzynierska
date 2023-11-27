import { Box,  MenuItem,
    Select,
    useTheme,
    InputLabel,
    FormControl,
    SelectChangeEvent,
    Button, } from "@mui/material";
import { useState } from "react";
import { handleSelectChange } from "../../../utils/functions/handlers";

const ChangePetStatus = () => {
    const theme = useTheme();
    const [status, setStatus] = useState<string>("New");
    const selectChange = (event: SelectChangeEvent) => {
        handleSelectChange(event, setStatus)
      }
  return (
    <>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          name="sex"
          variant="outlined"
          sx={{
            color: theme.palette.text.primary,
            width: "600px",
          }}
          size="small"
          defaultValue={"Status"}
          onChange={selectChange}
        >
          <MenuItem value={"Do adopcji"}>Do adopcji</MenuItem>
          <MenuItem value={"Nie do adopcji"}>Nie do adopcji</MenuItem>
          <MenuItem value={"Izolowany"}>Izolowany</MenuItem>
          <MenuItem value={"Chory"}>Chory</MenuItem>
          <MenuItem value={"Nowy"}>Nowy</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined">Zmień status</Button>
    </>
  );
};

export default ChangePetStatus;
