import { Box, useTheme } from "@mui/material";
import AddDiseaseForm from "../components/addDiseaseForm";


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
            <Box>
                
            </Box>

        </Box>
    )
}

export default DiseaseManagement;