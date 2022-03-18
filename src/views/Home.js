import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import HeroImage from "../img/landingPage/Saly-13.png";
import CustomisedImage from "../img/landingPage/Saly-23.png";
import NewsImage from "../img/landingPage/news.jpeg";
import { Link } from "react-router-dom";

import editorDemo from "../img/landingPage/editorDemo.png";
import chromeWebkitLogo from "../img/landingPage/chromeWebkitLogo.png";

import divider1 from "../img/landingPage/divider.svg";

import React from "react";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* <Container component="main"> */}
        {/* <Typography variant="h2" component="h1" gutterBottom>
            Home Component
          </Typography> */}

        <Grid container className="hero">
          {/* <Box
            maxWidth="lg"
            sx={{ minHeight: "70vh" }}
            style={{
              display: "flex",
              // flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          > */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ minHeight: "70vh" }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "50px",
            }}
          >
            <Typography variant="h1" component="h1" align="left" color={"#fff"}>
              Brand Folder
            </Typography>
            <Typography variant="h6" component="h6" align="left" color={"#fff"}>
              Create Easy To Go Content In Just Few Clicks
            </Typography>
            <ButtonGroup fullWidth>
              <Button variant="contained" component={Link} to="/editor">
                Get Started
              </Button>
              <Button
                variant="text"
                sx={{ margin: "0px 10px" }}
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "auto",
              }}
              src={HeroImage}
            />
          </Grid>
          {/* </Box> */}
        </Grid>
        {/* sec-1 editor */}
        {/* <Box className="bg-blob1 bg-blob"> */}
        <Grid container className="bg-blob1 bg-blob">
          <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
            <Typography variant="h2" component="h2" color={"#fff"}>
              Solutions We Provide
            </Typography>
            <Typography variant="h6" component="h6" color={"#fff"}>
              A Complete Suit For All Your Needs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                // max-:100%,
                height: "600px",
                width: "auto",
              }}
              src={editorDemo}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            // sx={{
            //   minHeight: "70vh",
            // }}
            justifyContent="center"
          >
            <Box
              sx={{ minHeight: "70vh" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" component="h2" color={"#fff"}>
                Editor
              </Typography>
              <Typography variant="h6" component="h6" color={"#fff"}>
                One Stop Editor which can generate images in few seconds.
              </Typography>
              {/* <ButtonGroup> */}
              <Button
                variant="contained"
                sx={{ margin: "0px 10px" }}
                component={Link}
                to="/editor"
              >
                Go To Editor
              </Button>
              {/* </ButtonGroup> */}
            </Box>
          </Grid>
        </Grid>
        {/* </Box> */}
        {/* sec-2 Chrome extenstion */}
        {/* <Box className="bg-blob2 bg-blob"> */}
        <Grid container className="bg-blob2 bg-blob">
          <Grid item xs={12} sm={12} md={6} lg={6} justifyContent="center">
            <Box
              sx={{ minHeight: "70vh" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" component="h2" color={"#fff"}>
                Chrome Extension
              </Typography>
              <Typography variant="h6" component="h6" color={"#fff"}>
                A Chrome Extention which get browser content directly to editor
                in click of a button.
              </Typography>
              <Button
                variant="contained"
                sx={{ margin: "0px 10px" }}
                component={Link}
                to="/chrome"
                disabled
              >
                Add to chrome
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                // max-:100%,
                height: "auto",
                width: "auto",
              }}
              src={chromeWebkitLogo}
            />
          </Grid>
        </Grid>
        {/* </Box> */}
        {/* sec-3 Inbuilt News */}
        <Grid container className="bg-blob1 bg-blob">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                // max-:100%,
                height: "auto",
                width: "auto",
              }}
              src={NewsImage}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            // sx={{
            //   minHeight: "70vh",
            // }}
            justifyContent="center"
          >
            <Box
              sx={{ minHeight: "70vh" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" component="h2" color={"#fff"}>
                News
              </Typography>
              <Typography variant="h6" component="h6" color={"#fff"}>
                No need for gathering NEWS articles when you get it directly to
                site.
              </Typography>
              {/* <ButtonGroup> */}
              <Button
                variant="contained"
                sx={{ margin: "0px 10px" }}
                component={Link}
                to="/Editor"
              >
                Go To News
              </Button>
              {/* </ButtonGroup> */}
            </Box>
          </Grid>
        </Grid>
        {/* sec-4 Customised */}
        <Grid container className="bg-blob2 bg-blob">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            // sx={{
            //   minHeight: "70vh",
            // }}
            justifyContent="center"
          >
            <Box
              sx={{ minHeight: "70vh" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" component="h2" color={"#fff"}>
                Customised
              </Typography>
              <Typography variant="h6" component="h6" color={"#fff"}>
                Customise your profile according to your brandkit.
              </Typography>
              {/* <ButtonGroup> */}
              <Button
                variant="contained"
                sx={{ margin: "0px 10px" }}
                component={Link}
                to="/profile"
              >
                Customise
              </Button>
              {/* </ButtonGroup> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                // max-:100%,
                height: "auto",
                width: "auto",
              }}
              src={CustomisedImage}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{ minHeight: "40vh" }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#001220",
            }}
          >
            <Typography variant="h2" component="h2" color={"#fff"}>
              Get Started With Ease
            </Typography>
            <Typography variant="h6" component="h6" color={"#fff"}>
              Start Making Your Life Simpler
            </Typography>
            <ButtonGroup>
              <Button
                variant="contained"
                sx={{ margin: "0px 10px" }}
                component={Link}
                to="/login"
              >
                Login
              </Button>

              <Button
                variant="contained"
                sx={{ margin: "0px 10px" }}
                component={Link}
                to="/signupt"
              >
                Sign Up
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
        {/* sec opt */}
        {/* <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" component="h4">
              Solutions We Provide
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="p" component="p">
              A Complete Suit
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={3}
              sx={{
                height: "100px",
              }}
            >
              <Typography variant="p" component="h4">
                A Complete Suit
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={3}
              sx={{
                height: "100px",
              }}
            >
              <Typography variant="p" component="h4">
                A Complete Suit
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={3}
              sx={{
                height: "100px",
              }}
            >
              <Typography variant="p" component="h4">
                A Complete Suit
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper
              elevation={3}
              sx={{
                height: "100px",
              }}
            >
              <Typography variant="p" component="h4">
                A Complete Suit
              </Typography>
            </Paper>
          </Grid>
        </Grid> */}
        {/* </Container> */}
        {/* <div className="shapedividers_com-5655"> hey </div> */}
        {/* <divider1 /> */}
        {/* <svg src={divider1} /> */}
        <img src={divider1} />
      </Box>
    </div>
  );
};

export default Home;
