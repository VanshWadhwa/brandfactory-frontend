import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Onboard.css";

const Onboard = () => {
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.replace(`${CLIENT_URL}/login`);
    } else {
      setLoading(false);
    }
  }, []);

  let layerImages = [
    "https://picsum.photos/1080",
    "http://127.0.0.1:8000/assets/images/basicGradient.png",
    "http://127.0.0.1:8000/assets/images/vansh/tempImage2_ZVN3Vjy.png",
  ];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container component="main" sx={{ mt: 17, mb: 2 }} maxWidth="sm">
          <div class="container">
            {layerImages.map((x) => (
              <img src={x} class="center" />
            ))}
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Onboard;
