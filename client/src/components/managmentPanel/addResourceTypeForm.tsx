import { Box, Typography, useTheme, TextField, Checkbox, Button } from "@mui/material"

const AddResourceTypeForm = () => {
    const theme = useTheme()

    return(
        <Box
            sx={{
                backgroundColor: theme.palette.background.adminField,
                minWidth:'350px',
                height:'fit-content',
                textAlign:'center',
                boxSizing:'border-box',
                padding:'1rem',
                display:'flex',
                flexDirection:'column',
                gap:'1rem',
                borderRadius:'1rem',
                boxShadow:theme.shadows[3],
            }}
        >
           <Typography variant="h5" color={theme.palette.text.primary}>
                    Dodaj rodzaj zasobu
                </Typography>
                <TextField
                    variant="outlined"
                    label="Nazwa"
                    name="name"
                    color="primary"
                    //onChange={handleTextChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                >
                    Dodaj
                </Button>
        </Box>
    )
}

export default AddResourceTypeForm