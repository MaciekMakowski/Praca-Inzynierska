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
                    boxSizing:'border-box',
                    padding:'1rem',
                    backgroundColor:theme.palette.background.adminField,
                    height:'fit-content',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:'0.5rem',
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
                    rows={4}
                    onChange={(e) => setNewDisease( disease => ({...disease, description:e.target.value}))}
                />
                <TextField
                    label="Leczenie"
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