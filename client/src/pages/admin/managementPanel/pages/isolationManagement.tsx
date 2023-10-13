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
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'space-around',
                flexDirection:'column',
            }}
        >
            <Box
                sx={{
                    paddingX:'1rem'
                }}
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