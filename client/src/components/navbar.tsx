import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../img/navbar/logo.png'

const drawerWidth = 240;
const pages = ['Strona główna', 'Nasze zwierzęta', 'Nasze potrzeby', 'Kontakt', 'Adopcja'];


const Navbar = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box
                py={2}
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                gap={2}
                >
                <Box
                    width={'3rem'}
                    height={'3rem'}
                    sx={{
                        backgroundImage:`url(${logo})`,
                        backgroundSize:'cover'
                    }}
                />
                <Typography variant="h6">
                    Schronisko.pl
                </Typography>
            </Box>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



    return(
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        py={2}
                        justifyContent={'center'}
                        alignItems={'center'}
                        display={'flex'}
                        gap={2}
                        flexGrow={1}
                    >
                        <Box
                            width={'3rem'}
                            height={'3rem'}
                            sx={{
                                backgroundImage:`url(${logo})`,
                                backgroundSize:'cover'
                            }}
                        />
                        <Typography flexGrow={1} variant="h6">
                            Schronisko.pl
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        {pages.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default Navbar