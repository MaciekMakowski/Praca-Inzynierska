import { useState,ChangeEvent } from "react";
import { Box, MenuItem, Select, TextField, Typography, useTheme, InputLabel, FormControl,SelectChangeEvent, Button } from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, {Dayjs} from "dayjs";


type Animal = {
    name:string,
    findPlace:string,
    race:string,
    number:string,
    species:string,
    weight:number,
    sex:string,
    birthDate:string
}

const AddAnimalForm = () => {
    const theme = useTheme();
    const [newAnimal, setNewAnimal] = useState<Animal>({
        name:'',
        findPlace:'',
        race:'',
        number:'',
        species:'',
        weight:0,
        sex:'',
        birthDate:'',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement> | SelectChangeEvent, attributeName:string) => {
            const { value } = event.target;
            const newValue = attributeName === 'weight' ? parseFloat(value) : value;
            setNewAnimal(prevAnimal => ({ ...prevAnimal, [attributeName]: newValue }));
    };
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        const attributeName = event.target.name;
        if (attributeName) {
            handleChange(event, attributeName);
        }
    };
    const handleSelectChange = (event: SelectChangeEvent) => {
        const attributeName = event.target.name;
        if (attributeName) {
            handleChange(event, attributeName);
        }
    };
    const handleChangeBirthDate = (value:Dayjs | null) => {
        if (value === null) return;
        setNewAnimal(prevAnimal => ({
            ...prevAnimal,
            'birthDate': (value.format('YYYY-MM-DD'))
        }));
    };
    return(
        <Box
                sx={{
                    backgroundColor: theme.palette.background.adminField,
                    width:'300px',
                    height:'fit-content',
                    textAlign:'center',
                    boxSizing:'border-box',
                    padding:'1rem',
                    display:'flex',
                    flexDirection:'column',
                    gap:'1rem',
                    borderRadius:'1rem',
                }}
            >
                <Typography variant="h5" color={theme.palette.text.primary}>
                    Dodaj zwierzę
                </Typography>
                <TextField
                    variant="outlined"
                    label="Imię"
                    name="name"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="Miejsce znalezienia"
                    name="findPlace"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="Rasa"
                    name="race"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="Numer"
                    name="number"
                    type="number"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="Waga"
                    name="weight"
                    type="number"
                    color="primary"
                    onChange={handleTextChange}
                />
                <FormControl>
                    <InputLabel>Gatunek</InputLabel>
                        <Select
                            label="Gatunek"
                            name="species"
                            variant="outlined"
                            sx={{
                                color:theme.palette.text.primary, 
                            }}
                            defaultValue="Gatunek"
                            value={newAnimal.species}
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={1}>Pies</MenuItem>
                            <MenuItem value={2}>Kot</MenuItem>  
                        </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Płeć</InputLabel>
                        <Select
                            label="Płeć"
                            name="sex"
                            variant="outlined"
                            sx={{
                                color:theme.palette.text.primary, 
                            }}
                            defaultValue="Płeć"
                            value={newAnimal.sex}
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={1}>Samiec</MenuItem>
                            <MenuItem value={2}>Samica</MenuItem>  
                        </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Data urodzenia" onChange={(value:Dayjs | null) =>  handleChangeBirthDate(value)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <Button variant="contained" onClick={() => console.log(newAnimal)}>Dodaj</Button>
            </Box>
    )
}

export default AddAnimalForm;