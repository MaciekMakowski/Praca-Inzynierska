import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router";
import { LogOut } from "../utils/services/check";
import AdminMenuList from "./adminMenuList";

const AdminMenu = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const drawerWidth = 240;

  const handleLogout = () => {
    LogOut();
    navigate("/admin");
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        py={2}
        justifyContent={"center"}
        alignItems={"start"}
        display={"flex"}
        gap={2}
      >
        <Box height={"2rem"} />
        <Typography variant="h6">Schronisko.pl</Typography>
      </Box>
      <Divider />
      <List>
        <AdminMenuList primary={true} />
      </List>
      <Button
        variant="text"
        sx={{
          color: theme.palette.primary.main,
        }}
        onClick={() => handleLogout()}
      >
        Wyloguj
      </Button>
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
          justifyContent: "space-between",
          overflowY: "auto",
        }}
      >
        <AdminMenuList primary={false} />
        <Button
          variant="text"
          sx={{
            color: theme.palette.primary.contrastText,
          }}
          onClick={() => handleLogout()}
        >
          Wyloguj
        </Button>
      </Box>
      <AppBar
        component="nav"
        color={"secondary"}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
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
