import { useState,ChangeEvent } from "react";
import { Box, MenuItem, Select, TextField, Typography, useTheme, InputLabel, FormControl,SelectChangeEvent, Button } from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, {Dayjs} from "dayjs";
import { VolunteerType } from "../../../../utils/types/basicTypes";



const AddVolunteerForm = () => {
    const theme = useTheme();
    const [newVolunteer, setNewVolunteer] = useState<VolunteerType>({
        number:0,
        name:'',
        lastName:'',
        birthDate:'',
        sex:'',
        phoneNumber:0,
        email:'',
        city:'',
        postCode:'',
        address:'',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement> | SelectChangeEvent, attributeName:string) => {
            const { value } = event.target;
            const newValue = attributeName === 'weight' ? parseFloat(value) : value;
            setNewVolunteer(prevVolunteer => ({ ...prevVolunteer, [attributeName]: newValue }));
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
        setNewVolunteer(prevVolunteer => ({
            ...prevVolunteer,
            'birthDate': (value.format('YYYY-MM-DD'))
        }));
    };
    return(
        <Box
                sx={{
                    backgroundColor: theme.palette.background.adminField,
                    width:'350px',
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
                    Dodaj wolontariusza
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
                    label="Nazwisko"
                    name="lastName"
                    color="primary"
                    onChange={handleTextChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker sx={{width:'100%'}} label="Data urodzenia" onChange={(value:Dayjs | null) =>  handleChangeBirthDate(value)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
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
                            value={newVolunteer.sex}
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={1}>Kobieta</MenuItem>
                            <MenuItem value={2}>Mężczyzna</MenuItem>  
                        </Select>
                </FormControl>
                <TextField
                    variant="outlined"
                    label="Numer telefonu"
                    name="phoneNumber"
                    type="number"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="E-mail"
                    name="email"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="Miasto"
                    name="city"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="Kod pocztowy"
                    name="postCode"
                    color="primary"
                    onChange={handleTextChange}
                />
                <TextField
                    variant="outlined"
                    label="Adres"
                    name="address"
                    color="primary"
                    onChange={handleTextChange}
                />
                <Button variant="contained" onClick={() => console.log(newVolunteer)}>Dodaj</Button>
            </Box>
    )
}

export default AddVolunteerForm;