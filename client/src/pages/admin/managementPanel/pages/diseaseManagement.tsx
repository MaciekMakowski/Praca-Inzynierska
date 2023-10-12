import { Box, useTheme } from "@mui/material";
import AddDiseaseForm from "../components/addDiseaseForm";
import AnimalList from "../components/animalList";
import DiseaseList from "../components/diseaseList";


const DiseaseManagement = () => {
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
            <AddDiseaseForm/>
            <DiseaseList/>
            <AnimalList/>

        </Box>
    )
}

export default DiseaseManagement;