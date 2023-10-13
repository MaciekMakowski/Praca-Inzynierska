import { Button, Grid, Typography, useTheme } from "@mui/material";

type AdoptionListItemProps = {
    color:boolean
}


const AdoptionListItem = (props:AdoptionListItemProps) => {

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
                    variant="subtitle1"
                    color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                    >
                        #1234123
                </Typography>
            </Grid>
            <Grid item xs={2.5}>
                <Typography 
                    variant="subtitle1"
                    color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                    >
                        Adam Krzynówek
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                    >
                       Reksio
                </Typography>
            </Grid>
            <Grid item xs={2.5}>
                <Typography 
                    variant="subtitle1"
                    color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                    >
                        Józef Alfons
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography 
                    variant="subtitle1"
                    color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                    >
                        24-03-2021
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography 
                    variant="subtitle1"
                    color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                    >
                        Nowa
                </Typography>
            </Grid>
            <Grid item xs={1}>
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
export default AdoptionListItem