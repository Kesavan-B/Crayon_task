import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Menu,
  MenuItem,
  Button,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
} from "@mui/material";
import { LOGOE } from "../../assests/Imggrp";
import Searchfield from './Searchfield'



const pages = [
  "Electric Bicycle",
  "Bicycle Categories",
  "Bicycle Types",
  "Accessories",
  "Cycling Clothing",
  "KTM",
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <Searchfield/>
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
     
          <Typography
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
             <img src={LOGOE} alt="logo" className="ktm-logo"/>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              color: "#fff",
              display: { xs: "flex", md: "none", color: "black",},
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black"},
              }}
            >
              <div  className="all-links">
                {" "}
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography >{page}</Typography>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Box>

          <Typography
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <img src={LOGOE} alt="logo" className="ktm-logo"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
               
              </Button>
                
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
