import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  // let [profileState, setProfileState] = React.useState();

  let [profileState, setProfileState] = React.useState({
    id: 2,
    image: "/assets/default.jpg",
    primaryColor: "#j00ff00",
    secondaryColor: "#kff0000",
    user: 2,
  });

  console.log("Profile state : ");
  console.log(profileState);

  React.useEffect(() => {
    const url = "http://127.0.0.1:8000/api/v1/users/profile/";

    const token = localStorage.getItem("token");
    const tokenData = { token: "token123" };
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(tokenData),
        });

        const json = await response.json();
        // json.slip.advice
        setProfileState(json);
        console.log("profileData");
        // console.log(typeof newsList);
        console.log(json);
        // console.log(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

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
            {/* Profile Component primaryColor : {profileState.primaryColor} */}
            Profile Component primaryColor : {profileState.primaryColor}
          </Typography>
          <img
            src={`http://127.0.0.1:8000${profileState.image}`}
            height={"400px"}
            width={"400px"}
          />
        </Container>
      </Box>
    </div>
  );
};

export default Profile;
