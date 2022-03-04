import "./App.css";
import "./brand.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/layout/ResponsiveAppBar";
import StickyFooter from "./components/layout/StickyFooter";
import Home from "./views/Home";
import Profile from "./views/auth/Profile";
import Login from "./views/auth/Login";
import Logout from "./views/auth/Logout";
import Signup from "./views/auth/Signup";
import NotFound from "./views/NotFound";
import GodModeEditor from "./views/editor/GodModeEditor";
import Onboard from "./views/auth/Onboard";
import { createContext, useEffect, useMemo, useState } from "react";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";

import { Alert, Snackbar } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const SnackbarContext = createContext({});

function App() {
  let localTheme = localStorage.getItem("theme");
  if (localTheme === null) {
    localTheme = "light";
  }

  const [mode, setMode] = useState(localTheme);

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme === null) {
      localTheme = "light";
    }

    setMode(localTheme);
  }, []);

  useEffect(() => {
    if (mode == "light") {
      localStorage.setItem("theme", "dark");
    } else {
      console.log("Local storage set to light");
    }
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
        },
      }),
    [mode]
  );
  const [snack, setSnack] = useState({
    message: "",
    color: "",
    open: false,
  });

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <CssBaseline />
            <div
              className="App"
              style={
                {
                  // backgroundColor: theme.palette,
                }
              }
            >
              <ResponsiveAppBar />
              {/* <Home /> */}

              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/editor" element={<GodModeEditor />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/onboard" element={<Onboard />} />
              </Routes>
              <StickyFooter />
            </div>
            {/* </SnackbarContext.Provider> */}
          </SnackbarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
