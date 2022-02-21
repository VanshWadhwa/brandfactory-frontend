import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/layout/ResponsiveAppBar";
import StickyFooter from "./components/layout/StickyFooter";
import Home from "./views/Home";
import Editor from "./views/editor/Editor";
import Profile from "./views/auth/Profile";
import Login from "./views/auth/Login";
import Logout from "./views/auth/Logout";
import Signup from "./views/auth/Signup";
import NotFound from "./views/NotFound";
import GodModeEditor from "./views/editor/GodModeEditor";
import Onboard from "./views/auth/Onboard";
import { createContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export const SnackbarContext = createContext({});

function App() {
  const [snack, setSnack] = useState({
    message: "",
    color: "",
    open: false,
  });
  return (
    <BrowserRouter>
      <SnackbarContext.Provider value={{ snack, setSnack }}>
        <Snackbar open={snack.open} autoHideDuration={600}>
          <Alert>{snack.message}</Alert>
        </Snackbar>
        <div className="App">
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
      </SnackbarContext.Provider>
    </BrowserRouter>
  );
}

export default App;
