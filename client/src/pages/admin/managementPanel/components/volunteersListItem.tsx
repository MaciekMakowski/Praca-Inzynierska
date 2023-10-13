import { useTheme, Box, Grid, Typography, TextField, Button } from "@mui/material"

type VolunteersListItemProps = {
    color:boolean
}

const VolunteersListItem = (props:VolunteersListItemProps) => {
    const theme = useTheme();

    return(
        <Grid 
            container
            spacing={0}
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
                    #1234
            </Typography>
        </Grid>
        <Grid item xs={1}>
            <Typography 
                variant="subtitle1"
                color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                    Adam
            </Typography>
        </Grid>
        <Grid item xs={1.5}>
            <Typography 
                variant="subtitle1"
                color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                   Nowak
            </Typography>
        </Grid>
        <Grid item xs={1.5}>
            <Typography 
                variant="subtitle1"
                color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                    21-04-1999
            </Typography>
        </Grid>
        <Grid item xs={1.5}>
            <Typography 
                variant="subtitle1"
                color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                    453-234-234
            </Typography>
        </Grid>
        <Grid item xs={1}>
            <Typography 
                variant="subtitle1"
                color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                    Olsztyn
            </Typography>
        </Grid>
        <Grid item xs={1}>
            <Typography 
                variant="subtitle1"
                color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                    10-041
            </Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography 
                variant="subtitle1"
                color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                    Słoneczna 12a/5
            </Typography>
        </Grid>
        <Grid item xs={1}>
            <Button
                sx={{
                    color:{color:props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                }}
            >
                Przejdź
            </Button>
        </Grid>
    </Grid>
    )
}

export default VolunteersListItem;