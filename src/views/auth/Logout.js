import React, { useState, useEffect, Fragment } from "react";

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      window.location.replace(`${CLIENT_URL}/login`);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    fetch(`${SERVER_URL}/api/v1/users/auth/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.clear();
        window.location.replace(`${CLIENT_URL}/login`);
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type="button" value="Logout" onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

export default Logout;
