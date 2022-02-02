import * as React from "react";
import "../../Onboard.css";
import { Link } from "react-router-dom";

import {
  StepLabel,
  Box,
  Button,
  Container,
  Step,
  Stepper,
  Typography,
  TextField,
  Grid,
} from "@mui/material";

import { ChromePicker } from "react-color";

const steps = [
  "Getting Started",
  "Add Logo and Handle Name",
  "Add Colors",
  "Add template Images",
  "Add telegram Token",
];
const GettingStarted = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Getting Started
        </Typography>
        <Typography variant="h5" component="h4" gutterBottom>
          Create your profile with Full customisation
        </Typography>
      </Container>
    </Box>
  );
};

const StepperFinish = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Your Onboarding is complete
        </Typography>
        <Typography variant="h5" component="h4" gutterBottom>
          You Can now use the editor with your own customisation
        </Typography>
        <Link to="/editor">Editor</Link>
      </Container>
    </Box>
  );
};
const AddColors = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "50vh",
        height: "70vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h4" gutterBottom>
              Choose Your Colors
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="h5" gutterBottom>
              Primary Color
            </Typography>

            <ChromePicker
              id="primaryColor"
              // color={profileState.primaryColor}
              // onChange={(e) => {
              //   setProfileState({ ...profileState, primaryColor: e.hex });
              // }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="h5" gutterBottom>
              Secondary Color
            </Typography>
            <ChromePicker
              id="primaryColor"
              // color={profileState.primaryColor}
              // onChange={(e) => {
              //   setProfileState({ ...profileState, primaryColor: e.hex });
              // }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h4" gutterBottom>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
const AddHandleName = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "50vh",
        height: "70vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h5" component="h4" gutterBottom>
          Add Your Handle Name
        </Typography>
        <TextField
          id="standard-basic"
          fullWidth
          // label="Standard"
          margin="dense"
          autoFocus
          variant="standard"
        />
        <Typography variant="h5" component="h4" gutterBottom>
          Add Your Logo
        </Typography>
        <input type="file" />
      </Container>
    </Box>
  );
};

const AddTelegramToken = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "50vh",
        height: "70vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h5" component="h4" gutterBottom>
          Add Your Telegram Token
        </Typography>
        <TextField
          id="standard-basic"
          fullWidth
          // label="Standard"
          margin="dense"
          autoFocus
          variant="standard"
        />
      </Container>
    </Box>
  );
};

let layerImages = [
  "https://picsum.photos/1080",
  "http://127.0.0.1:8000/assets/images/basicGradient.png",
  "http://127.0.0.1:8000/assets/images/vansh/tempImage2_ZVN3Vjy.png",
  "http://127.0.0.1:8000/assets/images/TransparentText.png",
];
const AddTemplateImages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "70vh",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h4" gutterBottom>
            Add Your Template Images
          </Typography>
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="h4" gutterBottom>
            Template 1 Image
          </Typography>
          <input type="file" />
          <Typography variant="h5" component="h4" gutterBottom>
            Template 2 Image
          </Typography>
          <input type="file" />
          <Typography variant="h5" component="h4" gutterBottom>
            Template 3 Image
          </Typography>
          <input type="file" />
          {/* <Typography variant="h5" component="h4" gutterBottom>
            Template 1 Image
          </Typography>
          <input type="file" /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

const stepsComponents = [
  <GettingStarted />,
  <AddHandleName />,
  <AddColors />,
  <AddTemplateImages />,
  <AddTelegramToken />,
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50vh",
        p: 3,
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <StepperFinish />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Typography sx={{ mt: 2, mb: 1 }}> */}
          {stepsComponents[activeStep]}
          {/* </Typography> */}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
