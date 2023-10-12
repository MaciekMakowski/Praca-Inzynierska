import { useState } from "react";
import { Box, Button, TextField, useTheme, Typography, Grid } from "@mui/material"
import AnimalListItem from "./animalListItem";
import DiseaseListItem from "./diseaseListItem";


const DiseaseList = () => {
    const theme = useTheme();

    const returnItems = () => {
        const items = []
        for (let i = 0; i < 20; i++)

                items.push(<DiseaseListItem key={i} color={i%2==0}/>);
        return items
    }
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.adminField,
                width:'600px',
                height:'100%',
                textAlign:'center',
                boxSizing:'border-box',
                display:'flex',
                flexDirection:'column',
                padding:'1rem',
                gap:'1rem',
                borderRadius:'1rem',
                boxShadow:theme.shadows[3],
            }}
        >
            <Box
                sx={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'space-between',
                    gap:'1rem',
                }}
            >
                <Box 
                sx={{
                    display:'flex',
                    gap:'1rem',
                }}
                >
                     <Button variant="contained">
                        Szukaj
                    </Button>
                <TextField 
                    size="small"
                    label="Wyszukaj"
                />
                </Box>
            </Box>
            <Grid 
                container
                spacing={0}
            >
                <Grid item xs={3}>
                    <Typography 
                        variant="subtitle1"
                        color={theme.palette.primary.main}
                        >
                            Nazwa
                    </Typography>
                </Grid>
                <Grid item xs={6.4}>
                    <Typography 
                        variant="subtitle1"
                        color={theme.palette.primary.main}
                        >
                            Objawy
                    </Typography>
                </Grid>
                <Grid item xs={2.4}>
                <Typography 
                        variant="body1"
                        fontWeight={600}
                        color={theme.palette.primary.main}
                        >
                            Lista chorób
                    </Typography>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'1rem',
                    height:'95%',
                    overflowY:'auto',
                }}
            >
                { returnItems()}
                
            </Box>
        </Box>
    )
}

export default DiseaseList