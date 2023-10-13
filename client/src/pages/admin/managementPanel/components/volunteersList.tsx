import { useTheme, Box, Grid, Typography, TextField, Button } from "@mui/material"
import VolunteersListItem from "./volunteersListItem";


const VolunteersList = () => {
    const theme = useTheme();

    const returnItems = () => {
        const items = []
        for (let i = 0; i < 20; i++)

                items.push(<VolunteersListItem key={i} color={i%2==0}/>);
        return items
    }
    
    return (
        <Box
        sx={{
            backgroundColor: theme.palette.background.adminField,
            flexGrow:1,
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
            width="100%"
            container
            spacing={0}
        >
            <Grid item xs={1}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Numer
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Imię
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                       Nazwisko
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Data urodzenia
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Numer telefonu
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Miasto
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Kod pocz.
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Adres
                </Typography>
            </Grid>
            <Grid item xs={1}>
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
         {returnItems()}   
        </Box>
    </Box>
    )
}

export default VolunteersList