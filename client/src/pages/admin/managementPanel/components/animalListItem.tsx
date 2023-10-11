import { Box, Button, Typography, useTheme, Grid } from "@mui/material";

type AnimalListItemProps = {
    color:boolean    
}

const AnimalListItem = (props:AnimalListItemProps) => {
    const theme = useTheme();

    return (
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
                <Grid item xs={2.4}>
                    <Typography 
                        variant="subtitle1"
                        color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                        >
                            123123132
                    </Typography>
                </Grid>
                <Grid item xs={2.4}>
                    <Typography 
                        variant="subtitle1"
                        color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                        >
                            Puszek
                    </Typography>
                </Grid>
                <Grid item xs={2.4}>
                    <Typography 
                        variant="subtitle1"
                        color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                        >
                            Kot
                    </Typography>
                </Grid>
                <Grid item xs={2.4}>
                    <Typography 
                        variant="subtitle1"
                        color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                        >
                            16
                    </Typography>
                </Grid>
                <Grid item xs={2.4}>
                    <Button
                        sx={{
                            color:props.color ? theme.palette.primary.main : theme.palette.text.secondary
                        }}
                    >
                        Przejdź
                    </Button>
                </Grid>


            </Grid>
    )
}

export default AnimalListItem;