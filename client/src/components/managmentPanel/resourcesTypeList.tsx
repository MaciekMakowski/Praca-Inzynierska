import { useTheme, Box, Grid, Typography } from "@mui/material"
import ResourceTypeListItem from "./resourcesTypeListItem"

const ResourcesTypeList = () => {
    const theme = useTheme()

    const returnItems = () => {
        const items = []
        for (let i = 0; i < 20; i++)

                items.push(<ResourceTypeListItem key={i} color={i%2==0}/>);
        return items
    }

    return(
        <Box
        sx={{
            backgroundColor: theme.palette.background.adminField,
            flexGrow:1,
            height:'30%',
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
        <Grid
            width="99%"
            container
            spacing={0}
        >
            <Grid item xs={3}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Numer
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography 
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    >
                        Nazwa
                </Typography>
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
        
    </Box>
    )
}

export default ResourcesTypeList