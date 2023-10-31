import { AppBar, Box, Divider, Drawer, IconButton, List, Toolbar, Typography, useTheme } from "@mui/material";

import AdminMenuList from "./adminMenuList";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import { useState } from "react";

const AdminMenu = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        py={2}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        gap={2}
      >
        <Box
          width={"3rem"}
          height={"3rem"}
        />
        <Typography variant="h6">Schronisko.pl</Typography>
      </Box>
      <Divider />
      <List>
        <AdminMenuList primary={true}/>
      </List>
    </Box>
  );

  return (
    <>
    <Box
      sx={{
        position: "fixed",
        minWidth: "200px",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        boxSizing: "border-box",
        padding: "1rem",
        flexDirection: "column",
        gap: "1rem",
        display: { xs: "none", lg: "flex" },
      }}
    >
      <AdminMenuList primary={false}/>
    </Box>
    <AppBar component="nav" color={"secondary"} sx={{display:{xs:'block', lg:'none'}}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            py={2}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            gap={2}
            flexGrow={1}
          >
            <Typography flexGrow={1} variant="h6">
              Schronisko.pl
            </Typography>
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
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        </>
  );
};

export default AdminMenu;
