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
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/userSlice";

const Navigation = () => {
  const [mobileAnchor, setMobileAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const { currentUser, isAuthenticated } = useSelector(
    (state: RootState) => state.user
  );

  const mobileOpen = Boolean(mobileAnchor);
  const profileOpen = Boolean(profileAnchor);

  const handleLogout = () => {
    dispatch(logout());
    setProfileAnchor(null);
  };

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
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
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
          <IconButton
            aria-controls={profileOpen ? "profile-menu" : undefined}
            aria-haspopup="true"
            onClick={(e) => setProfileAnchor(e.currentTarget)}
          >
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
        <Divider />
        {!isAuthenticated ? (
          <>
            <MenuItem
              component={NavLink}
              to="/signin"
              onClick={() => setMobileAnchor(null)}
            >
              Sign in
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/registration"
              onClick={() => setMobileAnchor(null)}
            >
              Register
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem disabled>Hello, {currentUser?.firstName}</MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                setMobileAnchor(null);
              }}
            >
              Logout
            </MenuItem>
          </>
        )}
      </Menu>

      {/* PROFILE MENU */}
      <Menu
        id="profile-menu"
        anchorEl={profileAnchor}
        open={profileOpen}
        onClose={() => setProfileAnchor(null)}
      >
        {!isAuthenticated ? (
          <>
            <MenuItem component={NavLink} to="/signin">
              Sign in
            </MenuItem>
            <MenuItem component={NavLink} to="/registration">
              Register
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem disabled>Hello, {currentUser?.firstName}</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        )}
      </Menu>
    </AppBar>
  );
};

export default Navigation;
