import { Box, useTheme, Typography } from "@mui/material";
import AddDiseaseForm from "../components/addDiseaseForm";
import AnimalList from "../components/animalList";
import DiseaseList from "../components/diseaseList";


const DiseaseManagement = () => {
    const theme = useTheme();

    return(
        <Box
        sx={{
            minWidth:'1600px',
            height:'100%',
            boxSizing:'border-box',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around',
            flexDirection:'column',
            paddingX:'1rem'
        }}
        >
            <Box>
                <Typography variant="h4" textAlign={'start'} color={theme.palette.text.primary}>
                    Zarządzanie chorobami
                </Typography>
            </Box>
            <Box 
                sx={{
                    height:'90%',
                    display:'flex',
                    gap:'1rem'
                }}
            >
                <AddDiseaseForm/>
                <DiseaseList/>
                <AnimalList/>
            </Box>
        </Box>
    )
}

export default DiseaseManagement;