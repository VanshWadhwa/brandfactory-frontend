import * as React from "react";
import "../../Onboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
import useNotification from "../../components/layout/Snackbar";

const steps = [
  "Getting Started",
  "Add Logo and Handle Name",
  "Add Colors",
  "Add template Images",
  "Add telegram Token",
];
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

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

const StepperFinish = ({ handleSubmit }) => {
  handleSubmit();

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
const AddColors = ({ profileState, setProfileState }) => {
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
              color={profileState.primaryColor}
              onChange={(e) => {
                setProfileState({ ...profileState, primaryColor: e.hex });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="h5" gutterBottom>
              Secondary Color
            </Typography>
            <ChromePicker
              id="secondaryColor"
              color={profileState.secondaryColor}
              onChange={(e) => {
                setProfileState({ ...profileState, secondaryColor: e.hex });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h4"
              gutterBottom
              display="block"
              color={profileState.primaryColor}
            >
              Lorem ipsum
            </Typography>
            <Typography
              variant="h5"
              component="h4"
              gutterBottom
              display="block"
              color={profileState.secondaryColor}
            >
              dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
const AddHandleName = ({ profileState, setProfileState }) => {
  const [previewLogo, setPreviewLogo] = React.useState();
  const [selectedFileLogo, setSelectedFileLogo] = React.useState();

  let handleChange = (e) => {
    setProfileState({ ...profileState, [e.target.id]: e.target.value });
  };
  // handlinglogo
  let handleLogoImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFileLogo(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFileLogo(e.target.files[0]);
    setProfileState({
      ...profileState,
      logoImage: e.target.files[0],
    });
  };
  React.useEffect(() => {
    if (!selectedFileLogo) {
      setPreviewLogo(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFileLogo);
    setPreviewLogo(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileLogo]);
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
          label="handleName"
          fullWidth
          // label="Standard"
          margin="dense"
          autoFocus
          variant="standard"
          type="text"
          placeholder="handleName"
          id="handleName"
          value={profileState.handleName}
          onChange={(e) => handleChange(e)}
          required
        />
        <Typography variant="h5" component="h4" gutterBottom>
          Add Your Logo
        </Typography>
        <input
          type="file"
          id="logoImage"
          accept="image/png, image/jpeg , image/jpg"
          onChange={(e) => handleLogoImageChange(e)}
          // required
        />{" "}
        {typeof profileState.logoImage == "string" ? (
          <img
            src={`${SERVER_URL + profileState.logoImage}`}
            height={"200px"}
            width={"200px"}
          />
        ) : (
          <img src={previewLogo} height={"200px"} width={"200px"} />
        )}
      </Container>
    </Box>
  );
};

const AddTelegramToken = ({ profileState, setProfileState }) => {
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

const AddTemplateImages = ({ profileState, setProfileState }) => {
  const [preview1, setPreview1] = React.useState();
  const [preview2, setPreview2] = React.useState();
  const [preview3, setPreview3] = React.useState();

  const [selectedFile1, setSelectedFile1] = React.useState();
  const [selectedFile2, setSelectedFile2] = React.useState();
  const [selectedFile3, setSelectedFile3] = React.useState();

  let handleTempImage1Change = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile1(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile1(e.target.files[0]);
    setProfileState({
      ...profileState,
      tempImage1: e.target.files[0],
    });
  };
  React.useEffect(() => {
    if (!selectedFile1) {
      setPreview1(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile1);
    setPreview1(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile1]);

  // handlingtempimage2
  let handleTempImage2Change = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile2(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile2(e.target.files[0]);
    setProfileState({
      ...profileState,
      tempImage2: e.target.files[0],
    });
  };
  React.useEffect(() => {
    if (!selectedFile2) {
      setPreview2(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile2);
    setPreview2(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile2]);

  // hanadling temp image 3

  let handleTempImage3Change = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile3(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile3(e.target.files[0]);
    setProfileState({
      ...profileState,
      tempImage3: e.target.files[0],
    });
  };
  React.useEffect(() => {
    if (!selectedFile3) {
      setPreview3(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile3);
    setPreview3(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile3]);

  let templateImage =
    typeof profileState.tempImage1 == "string"
      ? `${SERVER_URL + profileState.tempImage1}`
      : preview1;
  let layerImages = [
    "https://picsum.photos/1080",

    `${SERVER_URL}/assets/images/basicGradient.png`,
    templateImage,
    `${SERVER_URL}/assets/images/TransparentText.png`,
  ];

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
          <h3>TempImage 1</h3>
          <input
            type="file"
            id="tempImage1"
            accept="image/png, image/jpeg , image/jpg"
            onChange={(e) => handleTempImage1Change(e)}
            // required
          />

          {typeof profileState.tempImage1 == "string" ? (
            <img
              src={SERVER_URL + profileState.tempImage1}
              height={"200px"}
              width={"200px"}
            />
          ) : (
            <img src={preview1} height={"200px"} width={"200px"} />
          )}

          <h3>tempImage2</h3>
          <input
            type="file"
            id="tempImage2"
            accept="image/png, image/jpeg , image/jpg"
            onChange={(e) => handleTempImage2Change(e)}
            // required
          />

          {typeof profileState.tempImage2 == "string" ? (
            <img
              src={SERVER_URL + profileState.tempImage2}
              height={"200px"}
              width={"200px"}
            />
          ) : (
            <img src={preview2} height={"200px"} width={"200px"} />
          )}

          <h3>tempImage3</h3>
          <input
            type="file"
            id="tempImage3"
            accept="image/png, image/jpeg , image/jpg"
            onChange={(e) => handleTempImage3Change(e)}
            // required
          />

          {typeof profileState.tempImage3 == "string" ? (
            <img
              src={SERVER_URL + profileState.tempImage3}
              height={"200px"}
              width={"200px"}
            />
          ) : (
            <img src={preview3} height={"200px"} width={"200px"} />
          )}
          {/* <Typography variant="h5" component="h4" gutterBottom>
            Template 1 Image
          </Typography>
          <input type="file" /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default function Onboard() {
  const [msg, sendNotification] = useNotification();

  const [email, setEmail] = React.useState("");

  const [errors, setErrors] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  let [profileState, setProfileState] = React.useState({});

  const stepsComponents = [
    <GettingStarted />,
    <AddHandleName
      profileState={profileState}
      setProfileState={setProfileState}
    />,
    <AddColors profileState={profileState} setProfileState={setProfileState} />,
    <AddTemplateImages
      profileState={profileState}
      setProfileState={setProfileState}
    />,
    <AddTelegramToken
      profileState={profileState}
      setProfileState={setProfileState}
    />,
  ];

  React.useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.replace(`${CLIENT_URL}/login`);
    } else {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    const url = `${SERVER_URL}/profile/1`;

    const token = localStorage.getItem("token");
    const tokenData = { token: "token123" };
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          // body: JSON.stringify(tokenData),
        });

        const json = await response.json();
        // json.slip.advice
        setProfileState(json);
        console.log("profileData");
        // console.log(typeof newsList);
        console.log(json);
        console.log(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  let handleSubmit = (e) => {
    console.log("submiting...");
    // e.preventDefault();

    console.log("on submit");
    console.log(profileState);

    let form_data = new FormData();
    form_data.append("user", profileState.user);
    form_data.append("handleName", profileState.handleName);
    form_data.append("id", profileState.id);

    form_data.append("primaryColor", profileState.primaryColor);
    form_data.append("secondaryColor", profileState.secondaryColor);
    form_data.append("telegramToken", profileState.telegramToken);

    try {
      form_data.append(
        "logoImage",
        profileState.logoImage,
        profileState.logoImage.name
      );
    } catch {
      form_data.delete("logoImage");
    }

    try {
      form_data.append(
        "tempImage1",
        profileState.tempImage1,
        profileState.tempImage1.name
      );
    } catch {
      form_data.delete("tempImage1");
    }

    try {
      form_data.append(
        "tempImage2",
        profileState.tempImage2,
        profileState.tempImage2.name
      );
    } catch {
      form_data.delete("tempImage2");
    }

    try {
      form_data.append(
        "tempImage3",
        profileState.tempImage3,
        profileState.tempImage3.name
      );
    } catch {
      form_data.delete("tempImage3");
    }

    const url = `${SERVER_URL}/profile/1/`;

    const token = localStorage.getItem("token");

    axios
      .put(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
          // "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        sendNotification({
          msg: "Profile Updated",
          variant: "info",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(profileState);

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
          <StepperFinish handleSubmit={handleSubmit} />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleReset}>Reset</Button> */}
            <Button component={Link} to="/editor">
              Editor
            </Button>
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
