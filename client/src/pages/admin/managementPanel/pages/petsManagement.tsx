import { Box, useTheme, Typography } from "@mui/material";
import AddAnimalForm from "../components/addAnimalForm";
import AnimalList from "../components/animalList";

const PetsManagement = () => {
    const theme = useTheme();
    return(
        <Box
            sx={{
                width:'100%',
                minWidth:'1700px',
                height:'100%',
                boxSizing:'border-box',
                display:'flex',
                flexDirection:'column',
                flexWrap:'wrap',
                justifyContent:'space-around',
            }}
        >
            <Box
                sx={{
                    paddingX:'1rem',
                }}
            >
                <Typography variant="h4" textAlign={'start'} color={theme.palette.text.primary}>
                    Zarządzanie zwierzętami
                </Typography>
            </Box>
            <Box 
                sx={{
                    height:'90%',
                    display:'flex',
                    justifyContent:'space-around',
                }}
            >  
            <AddAnimalForm/>
            <AnimalList/>
            <Box
                sx={{
                    width:'40%'
                }}
            >

            </Box>    
            </Box>
        
        </Box>
    )
}

export default PetsManagement;