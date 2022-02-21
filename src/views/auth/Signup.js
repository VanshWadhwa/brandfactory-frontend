import React, { useState, useEffect } from "react";
import useNotification from "../../components/layout/Snackbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  const [msg, sendNotification] = useNotification();

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
      password1: password1,
      password2: password2,
    };

    fetch(`${SERVER_URL}/api/v1/users/auth/register/`, {
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
          sendNotification({
            msg: "Signed Up",
            variant: "info",
          });
          window.location.replace(`${CLIENT_URL}/onboard`);
        } else {
          sendNotification({
            msg: "Wrong Credentials",
            variant: "error",
          });
          setEmail("");
          setPassword1("");
          setPassword2("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      {loading === false && <h1>Signup</h1>}
      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email address:</label> <br />
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <label htmlFor="password1">Password:</label> <br />
        <input
          name="password1"
          type="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
        />{" "}
        <br />
        <label htmlFor="password2">Confirm password:</label> <br />
        <input
          name="password2"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />{" "}
        <br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
