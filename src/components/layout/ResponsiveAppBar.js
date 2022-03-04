import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
  const colorMode = React.useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
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
              <MenuItem>
                <Typography
                  component={Link}
                  to="/"
                  textAlign="center"
                  onClick={handleCloseNavMenu}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  component={Link}
                  to="/profile"
                  textAlign="center"
                  onClick={handleCloseNavMenu}
                >
                  Editor
                </Typography>
              </MenuItem>
              {isAuth ? (
                <React.Fragment>
                  <MenuItem>
                    <Typography
                      component={Link}
                      to="/profile"
                      textAlign="center"
                      onClick={handleCloseNavMenu}
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      component={Link}
                      to="/logout"
                      textAlign="center"
                      onClick={handleCloseNavMenu}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <MenuItem>
                    <Typography
                      component={Link}
                      to="/login"
                      textAlign="center"
                      onClick={handleCloseNavMenu}
                    >
                      Login
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      component={Link}
                      to="/signup"
                      textAlign="center"
                      onClick={handleCloseNavMenu}
                    >
                      Sign Up
                    </Typography>
                  </MenuItem>
                </React.Fragment>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Brand Folder
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/editor"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Editor
            </Button>

            {isAuth ? (
              <React.Fragment>
                <Link to="/profile">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Profile
                  </Button>
                </Link>

                <Link to="/logout">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
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
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/Signup">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </React.Fragment>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ ml: 1 }}
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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Editor</Typography>
                </MenuItem>
              </Link>

              {isAuth ? (
                <React.Fragment>
                  <Link to="/profile">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                  </Link>

                  <Link to="/logout">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link to="/login">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                  </Link>

                  <Link to="/signup">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Sign up</Typography>
                    </MenuItem>
                  </Link>
                </React.Fragment>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
