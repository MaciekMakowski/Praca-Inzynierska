import { Box, Typography, useTheme, TextField, FormControl,InputLabel, Select, MenuItem, Button } from "@mui/material"

const DeleteResourceType = () => {
    const theme = useTheme()

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
                    Usuń rodzaj zasobu
                </Typography>
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
                <Button
                    variant="contained"
                    color="warning"
                >
                    Usuń
                </Button>
        </Box>
    )
}

export default DeleteResourceType