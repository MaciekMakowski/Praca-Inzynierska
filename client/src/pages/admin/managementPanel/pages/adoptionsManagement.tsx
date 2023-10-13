import { Box, Typography, useTheme } from "@mui/material";
import AdoptionList from "../components/adoptionList";

const AdoptionsManagement = () => {

    const theme = useTheme()

    return(
        <Box
            sx={{
                minWidth:'1700px',
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
                    Zarządzanie Adopcjami
                </Typography>
            </Box>
            <Box 
                sx={{
                    height:'90%',
                    display:'flex',
                    justifyContent:'start',
                }}
            > 
             <AdoptionList/>
            </Box>
        </Box>
    )
}

export default AdoptionsManagement