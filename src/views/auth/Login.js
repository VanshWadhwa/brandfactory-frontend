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
    <div>
      {loading === false && <h1>Login</h1>}
      {errors === true && (
        <h2>
          Cannot log in with provided credentials
          {errors}
        </h2>
      )}
      {loading === false && (
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email address:</label> <br />
          <input
            name="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="password">Password:</label> <br />
          <input
            name="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default Login;
