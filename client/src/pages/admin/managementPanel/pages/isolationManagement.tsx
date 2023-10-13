import { Box, Typography, useTheme } from "@mui/material";
import IsolationList from "../components/isolationList";

const IsolationManagement = () => {
    const theme = useTheme()
    return(
        <Box
            sx={{
                width:'100%',
                minWidth:'1700px',
                height:'100%',
                boxSizing:'border-box',
                padding:'1rem',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'start',
                flexDirection:'column',
            }}
        >
            <Box
            >
                <Typography variant="h4" textAlign={'start'} color={theme.palette.text.primary}>
                    Zarządzanie Izolacjami
                </Typography>
            </Box>
            <Box 
                sx={{
                    height:'90%',
                    display:'flex',
                    justifyContent:'start',
                }}
            >  
                <IsolationList/>
            </Box>
        </Box>
    )
}

export default IsolationManagement; 