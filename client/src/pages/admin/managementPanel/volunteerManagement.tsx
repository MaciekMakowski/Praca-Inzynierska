
import {Box, Typography, useTheme} from "@mui/material";
import VolunteersList from "../../../components/managmentPanel/volunteersList";
import AddVolunteerForm from "../../../components/managmentPanel/addVolunteerForm";

const VolunteerManagement = () => {
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
                    Zarządzanie wolontariuszami
                </Typography>
            </Box>
            <Box 
                sx={{
                    height:'90%',
                    display:'flex',
                    gap:'1rem'
                }}
            >  
                <AddVolunteerForm/>
                <VolunteersList/>
            </Box>
        
        </Box>
    )
}

export default VolunteerManagement;