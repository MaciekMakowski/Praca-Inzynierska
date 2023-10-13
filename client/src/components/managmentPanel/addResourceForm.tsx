import { Box, Typography, useTheme, TextField, FormControl,InputLabel, Select, MenuItem, Button, Checkbox } from "@mui/material"
import {DatePicker} from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, {Dayjs} from "dayjs";
import { ChangeEvent, useState } from "react"
const AddResourceForm = () => {
    const theme = useTheme()
    const [checked, setChecked] = useState(false);

    const handleCheckBoxChange = (event:ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    return(
        <Box
            sx={{
                backgroundColor: theme.palette.background.adminField,
                minWidth:'350px',
                height:'fit-content',
                textAlign:'center',
                boxSizing:'border-box',
                padding:'1rem',
                display:'flex',
                flexDirection:'column',
                gap:'1rem',
                borderRadius:'1rem',
                boxShadow:theme.shadows[3],
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
                                color:theme.palette.text.primary, 
                            }}
                            defaultValue="Jednostka"
                            // value={newAnimal.species}
                            // onChange={handleSelectChange}
                        >
                            <MenuItem value={1}>Kilogramy</MenuItem>
                            <MenuItem value={2}>Litry</MenuItem>
                            <MenuItem value={3}>Sztuki</MenuItem>  
                        </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Rodzaj</InputLabel>
                        <Select
                            label="Rodzaj"
                            name="type"
                            variant="outlined"
                            sx={{
                                color:theme.palette.text.primary, 
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
                {checked && (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                         sx={{
                            flexGrow:1,
                        }} 
                        label="Data przydatności" //onChange={(value:Dayjs | null) =>  handleChangeBirthDate(value)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                )}
                <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                    }}
                >
                    <Checkbox onChange={handleCheckBoxChange}/> 
                    <Typography variant="subtitle1" color={theme.palette.text.primary}>Posiada datę przydatności</Typography>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                >
                    Dodaj
                </Button>
        </Box>
    )
}

export default AddResourceForm