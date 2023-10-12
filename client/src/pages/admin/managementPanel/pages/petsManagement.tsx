import { Box, useTheme } from "@mui/material";
import AddAnimalForm from "../components/addAnimalForm";
import AnimalList from "../components/animalList";

const PetsManagement = () => {
    const theme = useTheme();
    return(
        <Box
            sx={{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                padding:'1rem',
                display:'flex',
                flexWrap:'wrap',
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
    )
}

export default PetsManagement;