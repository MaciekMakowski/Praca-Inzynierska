import { Box, Typography, useTheme, TextField, Button } from "@mui/material";
import { useState } from "react";
import { DiseaseType } from "../../../../utils/types/basicTypes";


const AddDiseaseForm = () => {
    const theme = useTheme();
    const [newDisase, setNewDisease] = useState<DiseaseType>({
        name:'',
        description:'',
        treatment:'',
    });
    
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
                <Typography 
                    variant="h6" 
                    color={theme.palette.text.primary}
                >
                    Dodaj chorobę
                </Typography>
                <TextField
                    fullWidth
                    label="Nazwa choroby"
                    variant="outlined"
                    onChange={(e) => setNewDisease( disease => ({...disease, name:e.target.value}))}
                />
                <TextField
                    label="Objawy"
                    multiline
                    fullWidth
                    rows={4}
                    onChange={(e) => setNewDisease( disease => ({...disease, description:e.target.value}))}
                />
                <TextField
                    label="Leczenie"
                    fullWidth
                    multiline
                    rows={4}
                    onChange={(e) => setNewDisease( disease => ({...disease, treatment:e.target.value}))}
                />
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => console.log(newDisase)}
                >
                    Dodaj
                </Button>

            </Box>
    )
}

export default AddDiseaseForm