import { Box, Button, Container, TextField, Typography, Checkbox,  useTheme } from "@mui/material"
import back from '../../img/home/back.png'

const LoginPage = () => {
    const theme = useTheme()

    return(
        <Container
            sx={{
                width: '100%',
                height: '100vh', 
                backgroundImage:`url(${back})`,
                backgroundSize:'contain',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <Box sx={{
                width:{xs:'300px', md:'400px'}, 
                height:{xs:'400px', md:'500px'}, 
                bgcolor:theme.palette.background.secondary,
                border:`5px solid ${theme.palette.primary.main}`,
                borderRadius:'10px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                gap:'1rem'
                }}>
                    <Box
                        sx={{width:'100%'}}
                        textAlign={'center'}
                    >
                        <Typography 
                        variant="h5" 
                        color={theme.palette.text.primary}
                        >
                            Panel Administracyjny
                        </Typography>
                    </Box>
                    <TextField variant="outlined" focused label="Login"/>
                    <TextField type="password" variant="outlined" focused label="Password"/>
                    <Box
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <Checkbox 
                            sx={{color:theme.palette.primary.main}}
                        />
                        <Typography variant="button">Pamiętaj login</Typography>
                    </Box>
                    <Button variant="contained" color="primary">Zaloguj</Button>
                    <Typography variant="caption">Zapomniałeś hasła?</Typography>
            </Box>

        </Container>
    )
}

export default LoginPage