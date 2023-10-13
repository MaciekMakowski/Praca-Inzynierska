import { Box, useTheme, Typography } from "@mui/material";
import AddAnimalForm from "../../../components/managmentPanel/addAnimalForm";
import AnimalList from "../../../components/managmentPanel/animalList";

const PetsManagement = () => {
    const theme = useTheme();
    return(
        <Box
            sx={{
                minWidth:'1700px',
                height:'100%',
                boxSizing:'border-box',
                display:'flex',
                flexDirection:'column',
                flexWrap:'wrap',
                justifyContent:'space-around',
                paddingX:'1rem',
            }}
        >
            <Box>
                <Typography variant="h4" textAlign={'start'} color={theme.palette.text.primary}>
                    Zarządzanie zwierzętami
                </Typography>
            </Box>
            <Box 
                sx={{
                    height:'90%',
                    display:'flex',
                    gap:'1rem'
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