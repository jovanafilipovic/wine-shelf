import React, { useState } from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../pictures/logo.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // JS za responzivnu navigaciju u headeru
  const menuButton = document.getElementsByClassName("menu-icon")[0];
  const navBarLinks = document.getElementsByClassName("nav-div")[0];

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      navBarLinks.classList.toggle("active");
    });
  }

  return (
    <div className="header">
      <div className="logo-section">
        <img className="logo" src={Logo} alt="Wine Shelf logo" />
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <MenuIcon />
      </div>
      <nav className="navbar">
        <div className="nav-div">
          <ul className="nav-items">
            <NavLink to="/">
              <HomeIcon className="icon"></HomeIcon>
            </NavLink>
            <NavLink
              to="/wines"
              id="wines"
              aria-controls={open ? "wines-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Wines
            </NavLink>
            <NavLink to="/champagnes">Sparkling Wines</NavLink>
            <NavLink to="/regions">Regions</NavLink>
            <NavLink to="/grapes">Grapes</NavLink>
            <NavLink to="/gifts">Gifts</NavLink>
            <NavLink to="/favorites">
              <FavoriteIcon className="icon"></FavoriteIcon>
            </NavLink>
            <NavLink to="/shoppingBag">
              <ShoppingBagIcon className="icon"></ShoppingBagIcon>
            </NavLink>

            <IconButton id="profile-icon" size="small" onClick={handleClick}>
              <PersonIcon className="profile"></PersonIcon>
            </IconButton>
            {/*  <Menu
              id="wines-menu"
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{ "aria-labelledby": "wines-menu" }}
              onClose={handleClose}
            >
              <MenuItem>White</MenuItem>
              <MenuItem>Red</MenuItem>
              <MenuItem>Rose</MenuItem>
  </Menu>*/}
            {/*} <Menu
              anchorEl={anchorEl}
              className="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                <NavLink to="/signin" className="sign-in">
                  Sing in
                </NavLink>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <NavLink to="/registration" className="register">
                  Register
                </NavLink>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Sign out
              </MenuItem>
            </Menu>*/}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
