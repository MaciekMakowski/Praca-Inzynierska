import { Box, CircularProgress } from "@mui/material"

const Loader = () => {
    

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress color="primary"/>
        </Box>
    )
}

export default Loader