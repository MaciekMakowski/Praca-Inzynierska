import { Box, Button, Typography, useTheme, Grid } from "@mui/material";

type DiseaseListItemProps = {
    color:boolean    
}

const DiseaseListItem = (props:DiseaseListItemProps) => {
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
                <Grid item xs={2}>
                    <Typography 
                        variant="subtitle1"
                        color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                        >
                            Angina
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography 
                        variant="subtitle1"
                        color={props.color ? theme.palette.primary.main : theme.palette.text.secondary}
                        textAlign={'left'}
                        >
                            Duszenie, kaszel, katar, brak apetytu, gorączka, obrzęk szyji, ślinotok, biegunka, wymioty, zapalen
                    </Typography>
                </Grid>
                <Grid item xs={2}>
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

export default DiseaseListItem;