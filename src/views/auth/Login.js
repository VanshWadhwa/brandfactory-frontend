import {
  Button,
  Card,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Box, typography } from "@mui/system";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useNotification from "../../components/layout/Snackbar";

const Login = () => {
  const [msg, sendNotification] = useNotification();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace(`${CLIENT_URL}/editor`);
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    fetch(`${SERVER_URL}/api/v1/users/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem("token", data.key);
          window.location.replace(`${CLIENT_URL}/editor`);
          // setSnack({ message: "hello", open: true });
          sendNotification({
            msg: "Loged In",
            variant: "info",
          });
        } else {
          setEmail("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
          sendNotification({
            msg: "Wrong Credentials",
            variant: "error",
          });
        }
      });
  };

  return (
    <Box className="bg-shapes">
      <Container
        component="main"
        maxWidth="sm"
        sx={{ minHeight: "90vh" }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {loading === false && (
          <Paper
            style={
              {
                // backgroundColor: "pink",
              }
            }
            sx={{ p: 4, m: "auto" }}
          >
            <Typography component="h1" variant="h3">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                autoFocus
                name="email"
                type="email"
                value={email}
                required
                margin="dense"
                variant="outlined"
                label="Email"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                fullWidth
                autoFocus
                name="password"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                margin="dense"
                variant="outlined"
                label="Password"
                size="small"
              />
              <br />
              <br />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                endIcon={<LoginIcon />}
              >
                Login
              </Button>
            </Box>
            <br />

            <Divider variant="middle" />
            <br />
            <>
              <Typography component="p" variant="body2">
                Don't have an account?
                <Link to="/signup">
                  <Button variant="text" to="/signup">
                    Sign Up
                  </Button>
                </Link>
              </Typography>
            </>
          </Paper>
        )}
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default Login;
