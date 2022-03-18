import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../../App";
import useNotification from "../../components/layout/Snackbar.js";

const pages = [
  "Editor",
  "Home",
  "Profile",
  "Signup",
  "Login",
  "Logout",
  "Onboard",
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const [msg, sendNotification] = useNotification();
  const colorMode = React.useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    // sendNotification({
    //   msg: `We are currently hosted on low price plan`,
    //   variant: "info",
    // });

    sendNotification({
      msg: `API may take few seconds to load at the very first time`,
      variant: "info",
    });
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Link to="/"> */}
          <Typography
            component={Link}
            to="/"
            variant="h6"
            noWrap
            color="#fff"
            // component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Brand Folder
          </Typography>

          {/* </Link> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ color: "text.primary", display: "block" }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/editor">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ color: "text.primary", display: "block" }}
                >
                  Editor
                </Button>
              </Link>
              {isAuth ? (
                <React.Fragment>
                  <Link to="/Profile">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      Profile
                    </Button>
                  </Link>
                  <Link to="/logout">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      Log Out
                    </Button>
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link to="/login">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </React.Fragment>
              )}
              <Link to="/PremiumServices">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ color: "text.primary", display: "block" }}
                >
                  Premium Services
                </Button>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "#fff" },
            }}
          >
            Brand Folder
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/editor"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#fff", display: "block" }}
            >
              Editor
            </Button>

            {isAuth ? (
              <React.Fragment>
                <Link to="/profile">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "#fff", display: "block" }}
                  >
                    Profile
                  </Button>
                </Link>

                <Link to="/logout">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "#fff", display: "block" }}
                  >
                    Logout
                  </Button>
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "#fff", display: "block" }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/Signup">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "#fff", display: "block" }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </React.Fragment>
            )}

            <Link to="/PremiumServices">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#fff", display: "block" }}
              >
                Premium Services
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ mx: 2 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link to="/editor">
                <MenuItem
                  onClick={handleCloseUserMenu}
                  sx={{ color: "text.primary", display: "block" }}
                >
                  <Typography textAlign="center">Editor</Typography>
                </MenuItem>
              </Link>

              {isAuth ? (
                <React.Fragment>
                  <Link to="/profile">
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                  </Link>

                  <Link to="/logout">
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link to="/login">
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                  </Link>

                  <Link to="/signup">
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{ color: "text.primary", display: "block" }}
                    >
                      <Typography textAlign="center">Sign up</Typography>
                    </MenuItem>
                  </Link>
                </React.Fragment>
              )}
              <Link to="/PremiumServices">
                <MenuItem
                  onClick={handleCloseUserMenu}
                  sx={{ color: "text.primary", display: "block" }}
                >
                  <Typography textAlign="center">Premium Services</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
