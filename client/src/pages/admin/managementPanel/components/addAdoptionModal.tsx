import { Box, MenuItem, Select, TextField, Typography, useTheme, InputLabel, FormControl,SelectChangeEvent, Button, Modal, IconButton } from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, {Dayjs} from "dayjs";
import CloseIcon from '@mui/icons-material/Close';
type AddAdoptionModalProps = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const AddAdoptionModal = (props:AddAdoptionModalProps) => {
    const theme = useTheme();
    const handleClose = () => props.setOpen(false);

    return(
        <Modal
        open={props.open}
        onClose={handleClose}
    >
        <Box
            sx={{
                backgroundColor: theme.palette.background.adminField,
                position:'absolute',
                left:'50%',
                top:'50%',
                transform: 'translate(-50%, -50%)',
                width:'60%',
                height:'60%',
                boxSizing:'border-box',
                padding:'1rem',
                display:'flex',
                flexDirection:'column',
                gap:'1rem',
                border:`${theme.palette.primary.main} 4px solid}`,
                borderRadius:[3],
            }}
        >
            <Box
                sx={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'space-between',
                    gap:'1rem',
                }}
            >
                <Typography variant="h5" color={theme.palette.text.primary}>
                    Dodawanie nowej adopcji
                </Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                }}
            >
                <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                            Dane adoptującego
                        </Typography>
                    <Box
                        sx={{
                            display:'flex',
                            gap:'1rem',
                        }}
                    >
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection:'column',
                                gap:'1rem',
                                width:'250px'
                            }}
                        >
                        <TextField
                            variant="outlined"
                            label="Imię"
                            name="name"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Nazwisko"
                            name="lastName"
                            color="primary"
                        // onChange={handleTextChange}
                        />
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
                                    //value={newVolunteer.sex}
                                    //onChange={handleSelectChange}
                                >
                                    <MenuItem value={1}>Kobieta</MenuItem>
                                    <MenuItem value={2}>Mężczyzna</MenuItem>  
                                </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            label="Pesel"
                            name="pesel"
                            color="primary"
                        // onChange={handleTextChange}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer sx={{
                                width:'100%',
                                paddingTop:'5px',
                            }} 
                            components={['DatePicker']}
                            >
                                <DatePicker 
                                sx={{
                                    width:'100%',
                                }} 
                                label="Data urodzenia" 
                                //onChange={(value:Dayjs | null) =>  handleChangeBirthDate(value)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        </Box>
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection:'column',
                                gap:'1rem',
                                width:'250px'
                            }}
                        >
                        <TextField
                            variant="outlined"
                            label="Numer telefonu"
                            name="phoneNumber"
                            type="number"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            variant="outlined"
                            label="E-mail"
                            name="email"
                            color="primary"
                        // onChange={handleTextChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Miasto"
                            name="city"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Kod pocztowy"
                            name="postCode"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Adres"
                            name="address"
                            color="primary"
                            sx={{
                                marginTop:'5px'
                            }}
                            //onChange={handleTextChange}
                        />

                        </Box>
                    </Box>
                </Box>
                <Box>
                        <Typography variant="h6" color={theme.palette.text.primary}>
                            Dane zwierzęcia
                        </Typography>
                        <Box
                        sx={{
                            display:'flex',
                            gap:'1rem',
                        }}
                    >
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection:'column',
                                gap:'1rem',
                                width:'250px'
                            }}
                        >
                        <TextField
                            variant="outlined"
                            label="Numer"
                            name="number"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            label="Imię"
                            name="name"
                            color="primary"
                        // onChange={handleTextChange}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            label="Płeć"
                            name="sex"
                            color="primary"
                        // onChange={handleTextChange}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            label="Data urodzenia"
                            name="birthDate"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            label="Rasa"
                            name="race"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        </Box>
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection:'column',
                                gap:'1rem',
                                width:'250px'
                            }}
                        >
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            size="large"
                            sx={{
                                height:'100%',
                            }}
                        >
                            Szukaj zwierzęcia
                        </Button>
                        <TextField
                            disabled
                            variant="outlined"
                            label="Gatunek"
                            name="species"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            label="Waga"
                            name="weight"
                            color="primary"
                        // onChange={handleTextChange}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            label="Wiek"
                            name="age"
                            color="primary"
                            //onChange={handleTextChange}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            label="Miejsce znalezienia"
                            name="findPlace"
                            color="primary"
                            //onChange={handleTextChange}
                        />

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'flex-end',
                    width:'100%',
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        width:'fit-content',
                    }}
                >
                    Dodaj
                </Button>
            </Box>
        </Box>

    </Modal>
    )


}

export default AddAdoptionModal