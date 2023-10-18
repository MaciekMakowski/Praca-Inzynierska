import { Box, MenuItem, Select, TextField, Typography, useTheme, InputLabel, FormControl,SelectChangeEvent, Button, Grid, Pagination } from "@mui/material";
import ResourceListItem from "./resourceListItem";


const ResourcesList = () => {
    const theme = useTheme();

    const returnItems = () => {
        const items = []
        for (let i = 0; i < 20; i++)

                items.push(<ResourceListItem key={i} color={i%2==0}/>);
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
                label="Wyszukaj"
            />
            </Box>
                <FormControl>
                        <InputLabel>Rodzaj</InputLabel>
                            <Select
                                label="Rodzaj"
                                name="type"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    width:'200px',
                                    color:theme.palette.text.primary, 
                                }}
                                defaultValue="Wszystko"
                                // value={newAnimal.species}
                                // onChange={handleSelectChange}
                            >
                                <MenuItem value={0}>Wszystko</MenuItem>
                                <MenuItem value={1}>Jedzenie</MenuItem>
                                <MenuItem value={2}>Higiena</MenuItem> 
                                <MenuItem value={3}>Koce</MenuItem>
                                <MenuItem value={4}>Inne</MenuItem>
                            </Select>
                </FormControl>
        </Box>
        <Grid
            width="99%"
            container
            spacing={0}
        >
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Numer
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Nazwa
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                       Rodzaj
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Ilość
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Jednostka
                </Typography>
            </Grid>
            <Grid item xs={2.5}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Data przydatności
                </Typography>
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                gap:'1rem',
                height:'85%',
                overflowY:'auto',
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
    )
}

export default ResourcesList