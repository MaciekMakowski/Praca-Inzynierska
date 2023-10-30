import { Box, Typography, useTheme } from "@mui/material";

import IsolationList from "../../../components/managementPanel/isolationList";

const IsolationManagement = () => {
    const theme = useTheme()

    return(
        <>
            <Box>
                <Typography variant="h4" textAlign={'center'} color={theme.palette.text.primary}>
                    Zarządzanie izolacjami
                </Typography>
            </Box>
            <Box 
                sx={{
                    height:'90%',
                    display:'flex',
                    justifyContent:'start',
                    flexDirection: { xs: "column", md: "row"},
                    width:'100%'
                }}
            >  
                <IsolationList/>
            </Box>
        </>
    )
}

export default IsolationManagement; 