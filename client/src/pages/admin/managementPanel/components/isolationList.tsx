import { Box, useTheme,Grid, Button, Typography, TextField } from "@mui/material";
import IsolationListItem from "./isolationListItem";

const IsolationList = () => {
    const theme = useTheme()

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
                width:'900px',
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
                    paddingY:'0.5rem',
                    paddingX:'1rem',
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
                            <TextField size="small"/>
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
                            variant="outlined"
                        >
                            Koty
                        </Button>
                        <Button
                            variant="outlined"
                        >
                            Psy
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
                    <Grid item xs={2.5}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Data rozpoczęcia
                        </Typography>  
                    </Grid>
                    <Grid item xs={2.5}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Data zakończenia
                        </Typography>  
                    </Grid>
                    <Grid item xs={3.5}>
                        <Typography 
                            variant="body1" 
                            fontWeight={600} 
                            textAlign={'center'} 
                            color={theme.palette.text.primary}
                        >
                            Powód
                        </Typography>  
                    </Grid>
                    <Grid item xs={1.5}>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    height:'100%',
                    overflow:'auto',
                    gap:'1rem',
                }}
                >
                    {returnItems()}
                </Box>
        </Box>
    );
}



export default IsolationList;