import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    useTheme
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import shadows from "@mui/material/styles/shadows";

const AnimalsFilter = () => {
    const theme = useTheme();
    return(
        <>
                    <Box
              sx={{
                backgroundColor: theme.palette.background.adminField,
                padding: "1rem",
                boxShadow: shadows[3],
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: { xs: "column", xl: "row" },
                }}
              >
                <TextField
                  name="name"
                  label="Imię"
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "200px",
                  }}
                />
                <FormControl>
                  <InputLabel>Płeć</InputLabel>
                  <Select
                    label="Płeć"
                    name="Płeć"
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.primary,
                      width: "200px",
                    }}
                    defaultValue={"Płeć"}
                    size="small"
                  >
                    <MenuItem value={"Samiec"}>Samiec</MenuItem>
                    <MenuItem value={"Samica"}>Samica</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel>Status</InputLabel>
                  <Select
                    label="Status"
                    name="Status"
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.primary,
                      width: "200px",
                    }}
                    defaultValue={"Status"}
                    size="small"
                  >
                    <MenuItem value={"Do adopcji"}>Do adopcji</MenuItem>
                    <MenuItem value={"Izolowany"}>Izolowany</MenuItem>
                    <MenuItem value={"Adoptowany"}>Adoptowany</MenuItem>
                    <MenuItem value={"Chory"}>Chory</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel>Waga</InputLabel>
                  <Select
                    label="waga"
                    name="weight"
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.primary,
                      width: "200px",
                    }}
                    defaultValue={"waga"}
                    size="small"
                  >
                    <MenuItem value={"4"}>Do 5 kg</MenuItem>
                    <MenuItem value={"8"}>5-14 kg</MenuItem>
                    <MenuItem value={"12"}>15-24 kg</MenuItem>
                    <MenuItem value={"16"}>25-34 kg</MenuItem>
                    <MenuItem value={"16"}>więcej niż 35 kg</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: { xs: "column", xl: "row" },
                }}
              >
                <FormControl>
                  <InputLabel>Wiek</InputLabel>
                  <Select
                    label="wiek"
                    name="age"
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.primary,
                      width: "200px",
                    }}
                    defaultValue={"wiek"}
                    size="small"
                  >
                    <MenuItem value={"1"}>Do 1 roku</MenuItem>
                    <MenuItem value={"3"}>Do 3 lat</MenuItem>
                    <MenuItem value={"5"}>Do 5 lat</MenuItem>
                    <MenuItem value={"9"}>Do 9 lat</MenuItem>
                    <MenuItem value={"10"}>Ponad 9 lat</MenuItem>
                    <MenuItem value={"0"}>Wiek jest mi obojętny</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel>Rodzaj</InputLabel>
                  <Select
                    label="Rodzaj"
                    name="species"
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.primary,
                      width: "200px",
                    }}
                    defaultValue={"Rodzaj"}
                    size="small"
                  >
                    <MenuItem value={"Kot"}>Kot</MenuItem>
                    <MenuItem value={"Pis"}>Pies</MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    slotProps={{ textField: { size:'small' } }}
                    sx={{
                        width: "200px",
                    }}
                    format="YYYY-MM-DD"
                    label="Data od"
                    disableFuture
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    slotProps={{ textField: { size:'small' } }}
                    sx={{
                        width: "200px",
                    }}
                    format="YYYY-MM-DD"
                    label="Data do"
                    disableFuture
                  />
                </LocalizationProvider>
                <Button
                  sx={{
                    width: "180px",
                  }}
                  variant="contained"
                  size="small"
                >
                  Szukaj
                </Button>
              </Box>
            </Box>
        </>
    )
}

export default AnimalsFilter;