import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { ButtonGroup, Divider, Grid, IconButton } from "@mui/material";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Brand Folder
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Made by{" "}
        <Link
          color="inherit"
          href="https://api.whatsapp.com/send/?phone=917827405893&text=Hey+%2C+I+love+your+project,+Brand+Folder"
          target="_blank"
        >
          1sh_wadhwa
        </Link>{" "}
      </Typography>
    </>
  );
}
// FBAE3C
// 001220

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
      }}
    >
      {/* <CssBaseline /> */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          //   backgroundColor: (theme) =>
          //     theme.palette.mode === "light"
          //       ? theme.palette.grey[200]
          //       : theme.palette.grey[800],
          //
          backgroundColor: "secondary",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              component={Link}
              to="/"
              color="text.primary"
            >
              Brand Folder
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              Make content creation easier
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h6" component="h6" gutterBottom>
              Get Connected
            </Typography>
            {/* <Link to="/editor"> */}
            <ButtonGroup>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <WhatsAppIcon />
              </IconButton>
            </ButtonGroup>
            <a href="#"></a>
            {/* </Link> */}
          </Grid>
        </Grid>

        <br />
        <Divider variant="middle" />
        <br />

        <Container maxWidth="sm">
          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
