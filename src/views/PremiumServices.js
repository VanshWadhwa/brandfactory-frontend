import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import brImage from "../img/premiumServices/businessReinvented.jpeg";
import nbImage from "../img/premiumServices/newsBroadcaster.jpeg";
import rsImage from "../img/premiumServices/road2Success4me.jpeg";

import InstagramIcon from "@mui/icons-material/Instagram";

import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import HeroImage from "../img/landingPage/Saly-13.png";
import CustomisedImage from "../img/landingPage/Saly-23.png";
import NewsImage from "../img/landingPage/news.jpeg";
import { Link } from "react-router-dom";

import editorDemo from "../img/landingPage/editorDemo.png";
import chromeWebkitLogo from "../img/landingPage/chromeWebkitLogo.png";
import divider1 from "../img/landingPage/divider.svg";

const igPages = [
  {
    name: "BusinessReinvented",
    image: brImage,
    igUrl: "//instagram.com/businessReinvented",
  },
  {
    name: "road_2_success_4_me",
    image: rsImage,
    igUrl: "//instagram.com/road_2_success_4_me",
  },
  {
    name: "news.broadcaster",
    image: nbImage,
    igUrl: "//instagram.com/news.broadcaster",
  },
];
const PremiumServices = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* sec-1 editor */}
        {/* <Box className="bg-blob1 bg-blob"> */}
        <Grid container className="bg-blob1 bg-blob">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2" component="h2" color={"#fff"}>
              Premium Services
            </Typography>
            <Typography variant="h6" component="h6" color={"#fff"}>
              Instagram Pages + BrandFolder Server Access+ Brand Kit + Telegram
              Channels For Sale
            </Typography>
            <Typography variant="caption" component="p" color={"#fff"}>
              ( Prices Negotiable )
            </Typography>
          </Grid>

          {igPages.map((page) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                // sx={{
                //   minHeight: "70vh",
                // }}
                justifyContent="center"
              >
                <Box
                // sx={{ minHeight: "70vh" }}
                // style={{
                //   display: "flex",
                //   flexDirection: "column",
                //   justifyContent: "center",
                //   alignItems: "center",

                // }}
                >
                  <Paper
                    elevation={16}
                    sx={{
                      padding: "10px",

                      margin: "5%",
                    }}
                  >
                    {" "}
                    <Typography variant="h5" component="h5">
                      {page.name}
                    </Typography>
                    {/* <Grid item xs={12} sm={12} md={6} lg={6}> */}
                    <img
                      style={{
                        maxWidth: "100%",
                        maxWidth: "200px",

                        height: "auto",
                        width: "auto",
                        margin: "10px",
                        borderRadius: "10px",
                      }}
                      src={page.image}
                    />
                    {/* </Grid> */}
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        component={Link}
                        to="//wa.me/917827405893?text=Hey%20%2C%20I%20would%20like%20to%20buy%20your%20Instagram%20Page."
                        target="_blank"
                        startIcon={<WhatsAppIcon />}
                        target="_blank"
                      >
                        Contact Us
                      </Button>
                      <Button
                        variant="outline"
                        component={Link}
                        to={page.igUrl}
                        startIcon={<InstagramIcon />}
                        target="_blank"
                      >
                        Visit Page
                      </Button>
                    </ButtonGroup>
                  </Paper>
                </Box>
              </Grid>
            );
          })}

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper
              sx={{
                padding: "20px",
                maxWidth: "fit-content",
                margin: "auto",
                marginBottom: "20px",
                paddingX: "40px",
              }}

              // md={{
              // }}
            >
              {" "}
              <Typography variant="h3" component="h3">
                Custom Template
              </Typography>
              <Typography variant="h6" component="h6">
                I want a custom template for me
              </Typography>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                component={Link}
                to="//wa.me/917827405893?text=Hey%20%2C%20I%20want%20a%20custom%20template%20for%20me."
                target="_blank"
                startIcon={<WhatsAppIcon />}
                target="_blank"
              >
                Contact Us
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PremiumServices;
