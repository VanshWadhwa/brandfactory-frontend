import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Profile Component
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Profile;
