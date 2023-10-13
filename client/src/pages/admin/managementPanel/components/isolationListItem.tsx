import { Button, Grid, Typography, useTheme } from "@mui/material";

type IsolationListItemProps = {
    color:boolean
}

const IsolationListItem = (props:IsolationListItemProps) => {
    const theme = useTheme();

    return(
        <Grid container
            sx={{
                border:props.color ?  `1px solid ${theme.palette.primary.main}` : '',
                borderRadius:'0.3rem',
                boxSizing:'border-box',
                paddingY:'0.5rem',
                alignItems:'center',
                backgroundColor:props.color ? '' : theme.palette.background.light,
        }}
        >
            <Grid item xs={1}>
                <Typography 
                    variant="body1"
                    textAlign={'center'}
                    color={props.color? theme.palette.text.primary : theme.palette.text.secondary}
                >
                    #21342
                </Typography>  
            </Grid>
            <Grid item xs={1}>
                <Typography 
                    variant="body1"
                    textAlign={'center'}
                    color={props.color? theme.palette.text.primary : theme.palette.text.secondary}
                >
                    Puszek
                </Typography>  
            </Grid>
            <Grid item xs={2}>
                <Typography 
                    variant="body1"
                    textAlign={'center'}
                    color={props.color? theme.palette.text.primary : theme.palette.text.secondary}
                >
                    23.09.2021
                </Typography>  
            </Grid>
            <Grid item xs={2}>
                <Typography 
                    variant="body1"
                    textAlign={'center'}
                    color={props.color? theme.palette.text.primary : theme.palette.text.secondary}
                >
                    30.09.2021
                </Typography>  
            </Grid>
            <Grid item xs={4}>
                <Typography 
                    variant="body1"
                    textAlign={'center'}
                    color={props.color? theme.palette.text.primary : theme.palette.text.secondary}
                >
                    Angina, brak apetytu
                </Typography>  
            </Grid>
            <Grid item xs={2}>
               <Button
                sx={{
                    color:props.color? theme.palette.text.primary : theme.palette.text.secondary
                }}
               >
                    Przejdź
               </Button>
            </Grid>
            

        </Grid>
    )
}

export default IsolationListItem;