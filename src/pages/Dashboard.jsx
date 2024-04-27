
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Box, useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Outlet } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";
import MenuListItems from "../components/Navigation/MenuListItems";
import { useSelector } from "react-redux";
import logo from '../assets/stock-logo.png'
import avatar from '../assets/avatar.png'
import { avatarStyle } from "../styles/globalStyle";
import { useContext } from 'react';
import LigtModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useState } from "react";
import { ColorModeContext } from "../styles/theme";

const drawerWidth = 240;

function Dashboard(props) {
  const { logout } = useAuthCall();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { currentUser } = useSelector(state => state.auth)
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh" }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderRadius: "0.5rem",
          backgroundColor: theme.palette.mode === "dark" ? "primary.main" : "white"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: theme.palette.mode === "dark" ? "white" : "primary.main" }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="" style={{ width: "45px", height: "45px", marginRight: ".7rem" }} />
          <Typography variant="h4" noWrap component="div"
            sx={{ color: theme.palette.mode === "dark" ? "white" : "primary.main" }}
          >
            Smart Stock
          </Typography>
          <Box display="flex" sx={{ marginLeft: "auto" }}>
            <IconButton>
              {currentUser ? (<img
                style={avatarStyle}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser}`}
                alt=""
              />
              ) : (
                <img style={avatarStyle} src={avatar} />
              )}
            </IconButton>
            <IconButton
              sx={{ width: "45px", height: "45px", marginTop: ".4rem" }}
              onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LigtModeOutlinedIcon />

              )}
            </IconButton>
            <IconButton
              sx={{ width: "45px", height: "45px", marginTop: ".4rem" }}
              onClick={logout}>
              <LogoutIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <MenuListItems />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <MenuListItems />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>

  );
}

export default Dashboard;