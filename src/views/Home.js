import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import HeroImage from "../img/landingPage/Saly-13.png";
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
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ minHeight: "90vh" }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" component="h1" align="left">
              Brand Folder
            </Typography>
            <Typography variant="h6" component="h6" align="left">
              Create Easy To Go Content
            </Typography>
            <ButtonGroup fullWidth>
              <Button variant="contained" sx={{ margin: "0px 10px" }}>
                Get Started
              </Button>
              <Button variant="text" sx={{ margin: "0px 10px" }}>
                Clear
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                // max-:100%,
                height: "auto",
                width: "auto",
              }}
              src={HeroImage}
            />
          </Grid>
        </Grid>

        {/* sec-1 editor */}
        {/* <Box className="bg-blob1 bg-blob"> */}
        <Grid container className="bg-blob1 bg-blob">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                // max-:100%,
                height: "auto",
                width: "auto",
              }}
              src={HeroImage}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            // sx={{
            //   minHeight: "90vh",
            // }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{ minHeight: "90vh" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" component="h2" color={"#fff"}>
                Editor Pro
              </Typography>
              <Typography variant="h6" component="h6" color={"#fff"}>
                One Stop Editor
              </Typography>
              <ButtonGroup>
                <Button variant="contained" sx={{ margin: "0px 10px" }}>
                  Get Started
                </Button>
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
        {/* </Box> */}

        {/* sec-2 Chrome extenstion */}
        {/* <Box className="bg-blob2 bg-blob"> */}
        <Grid container className="bg-blob2 bg-blob">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            // sx={{
            //   minHeight: "90vh",
            // }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{ minHeight: "90vh" }}
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
                Chrome Extention
              </Typography>
              <ButtonGroup>
                <Button variant="contained" sx={{ margin: "0px 10px" }}>
                  Add to chrome
                </Button>
              </ButtonGroup>
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
              src={HeroImage}
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
              src={HeroImage}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            // sx={{
            //   minHeight: "90vh",
            // }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{ minHeight: "90vh" }}
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
                In built News
              </Typography>
              <ButtonGroup>
                <Button variant="contained" sx={{ margin: "0px 10px" }}>
                  Get Started
                </Button>
              </ButtonGroup>
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
            //   minHeight: "90vh",
            // }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{ minHeight: "90vh" }}
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
                Highly customisable
              </Typography>
              <ButtonGroup>
                <Button variant="contained" sx={{ margin: "0px 10px" }}>
                  Customise
                </Button>
              </ButtonGroup>
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
              src={HeroImage}
            />
          </Grid>
        </Grid>

        <Grid item item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{ minHeight: "90vh" }}
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
              <Button variant="contained" sx={{ margin: "0px 10px" }}>
                Get Started
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>

        {/* sec opt */}
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
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
        </Grid>
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
