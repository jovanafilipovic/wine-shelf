import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
// import Logo from "../../../public/images/logo.png";

const Header = () => {
  const [mobileAnchor, setMobileAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const mobileOpen = Boolean(mobileAnchor);
  const profileOpen = Boolean(profileAnchor);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "brown" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LOGO */}
        <Box display="flex" alignItems="center" gap={1}>
          <img alt="Wine Shelf" height={40} />
          <Typography variant="h6" fontWeight={600}>
            WINE SHELF
          </Typography>
        </Box>

        {/* DESKTOP NAV */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button component={NavLink} to="/" color="inherit">
            <HomeIcon />
          </Button>
          <Button component={NavLink} to="/wines" color="inherit">
            Wines
          </Button>
          <Button component={NavLink} to="/regions" color="inherit">
            Regions
          </Button>
          <Button component={NavLink} to="/giftBoxes" color="inherit">
            Gift Boxes
          </Button>
          <Button component={NavLink} to="/blog" color="inherit">
            Blog
          </Button>
          <Button component={NavLink} to="/favorites" color="inherit">
            <FavoriteIcon />
          </Button>
          <Button component={NavLink} to="/shoppingBag" color="inherit">
            <ShoppingBagIcon />
          </Button>

          {/* PROFILE */}
          <IconButton onClick={(e) => setProfileAnchor(e.currentTarget)}>
            <Avatar sx={{ bgcolor: "brown" }}>
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Box>

        {/* MOBILE MENU ICON */}
        <IconButton
          sx={{ display: { md: "none" } }}
          onClick={(e) => setMobileAnchor(e.currentTarget)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* MOBILE MENU */}
      <Menu
        anchorEl={mobileAnchor}
        open={mobileOpen}
        onClose={() => setMobileAnchor(null)}
      >
        <MenuItem
          component={NavLink}
          to="/"
          onClick={() => setMobileAnchor(null)}
        >
          Home
        </MenuItem>
        <MenuItem
          component={NavLink}
          to="/wines"
          onClick={() => setMobileAnchor(null)}
        >
          Wines
        </MenuItem>
        <MenuItem
          component={NavLink}
          to="/favorites"
          onClick={() => setMobileAnchor(null)}
        >
          Favorites
        </MenuItem>
        <MenuItem
          component={NavLink}
          to="/shoppingBag"
          onClick={() => setMobileAnchor(null)}
        >
          Shopping Bag
        </MenuItem>
      </Menu>

      {/* PROFILE MENU */}
      <Menu
        anchorEl={profileAnchor}
        open={profileOpen}
        onClose={() => setProfileAnchor(null)}
      >
        <MenuItem component={NavLink} to="/signin">
          Sign in
        </MenuItem>
        <MenuItem component={NavLink} to="/registration">
          Register
        </MenuItem>
        <Divider />
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
