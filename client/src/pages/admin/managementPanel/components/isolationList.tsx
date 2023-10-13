import { Box, useTheme,Grid, Button, Typography, TextField, Pagination } from "@mui/material";
import IsolationListItem from "./isolationListItem";
import { useState } from "react";

const IsolationList = () => {
    const theme = useTheme()
    const [filter, setFilter] = useState(0)

    const handleChangeFilter = (value:number) => {
        if(value === filter) setFilter(0)
        if(value !== filter) setFilter(value)
    }

    const returnItems = () => {
        const items = []
        for (let i = 0; i < 20; i++)

                items.push(<IsolationListItem key={i} color={i%2==0}/>);
        return items
    }

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.adminField,
                width:'1000px',
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
                    display:'flex',
                    flexDirection:'column',
                    boxSizing:'border-box',
                    gap:'1rem',
                }}
            >
                <Grid container
                    sx={{
                        boxSizing:'border-box',
                        paddingX:'1rem',
                    }}
                >
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                width:'100%',
                                display:'flex',
                                gap:'1rem',
                                justifyContent:'flex-start',
                            }}
                        >
                            <Button variant="contained">
                                Szukaj
                            </Button>
                            <TextField size="small" label="Wyszukaj zwierzęcia"/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                width:'100%',
                                display:'flex',
                                gap:'1rem',
                                justifyContent:'flex-end',
                            }}
                        >
                            <Button 
                                variant={filter === 0 ? 'outlined' : filter === 1 ? 'contained' : 'outlined'}
                                onClick={() => handleChangeFilter(1)}
                            >
                                Psy
                            </Button>
                            <Button 
                                variant={filter === 0 ? 'outlined' : filter === 2 ? 'contained' : 'outlined'}
                                onClick={() => handleChangeFilter(2)}
                            >
                                Koty
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
                <Grid container
                    sx={{
                        boxSizing:'border-box',
                        paddingX:'1rem',
                    }}
                >
                    <Grid item xs={1}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Numer
                        </Typography>  
                    </Grid>
                    <Grid item xs={1}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Imię
                        </Typography>  
                    </Grid>
                    <Grid item xs={2}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Data rozpoczęcia
                        </Typography>  
                    </Grid>
                    <Grid item xs={2}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Data zakończenia
                        </Typography>  
                    </Grid>
                    <Grid item xs={4}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Powód
                        </Typography>  
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    height:'90%',
                    overflow:'auto',
                    gap:'1rem',
                }}
                >
                    {returnItems()}
                </Box>
                <Box
            sx={{
                display:'flex',
                justifyContent:'end',
            }}
        >
            <Typography variant="subtitle1" color={theme.palette.text.primary}>
                <Pagination count={10} size="small"/>
            </Typography>
        </Box>
        </Box>
    );
}



export default IsolationList;