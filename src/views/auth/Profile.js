import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { SketchPicker } from "react-color";
import { LoadingButton } from "@mui/lab";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import useNotification from "../../components/layout/Snackbar";
import { height } from "@mui/system";
import { Link } from "react-router-dom";

const Profile = () => {
  // let [profileState, setProfileState] = React.useState();
  const [reqesting, setRequesting] = React.useState(false); //for download button loading
  const [msg, sendNotification] = useNotification();

  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  function handleClick() {
    setRequesting(true);
  }

  let [profileState, setProfileState] = React.useState({});
  const [selectedFiles, setSelectedFiles] = React.useState({});
  const [previewLogo, setPreviewLogo] = React.useState();
  const [preview1, setPreview1] = React.useState();
  const [preview2, setPreview2] = React.useState();
  const [preview3, setPreview3] = React.useState();

  const [selectedFileLogo, setSelectedFileLogo] = React.useState();
  const [selectedFile1, setSelectedFile1] = React.useState();
  const [selectedFile2, setSelectedFile2] = React.useState();
  const [selectedFile3, setSelectedFile3] = React.useState();

  // create a preview as a side effect, whenever selected file is changed

  let handleImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFiles({ ...selectedFiles, [e.target.id]: undefined });
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFiles({ ...selectedFiles, [e.target.id]: e.target.files[0] });
    setProfileState({
      ...profileState,
      [e.target.id]: e.target.files[0],
    });
  };
  let handleChange = (e) => {
    setProfileState({ ...profileState, [e.target.id]: e.target.value });
  };

  let handleColorChange = (e) => {
    // console.log("[e.target.id], e.hex");
    // console.log([e.target.id], e.hex);
    setProfileState({ ...profileState, primaryColor: e.hex });

    // this.setState({ background: color.hex });
  };

  // create a preview as a side effect, whenever selected file is changed

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

  // handling Tempimage1

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
        sendNotification({
          msg: "Backend Server Partially Down",
          variant: "error",
        });
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  let handleSubmit = (e) => {
    setRequesting(true);

    e.preventDefault();

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
          msg: "Profile Updated Successfully",
          variant: "info",
        });
      })
      .catch((err) => {
        console.log(err);
        sendNotification({
          msg: "Profile Updated Failed",
          variant: "error",
        });
      })
      .finally(() => {
        setRequesting(false);
      });
  };

  return (
    // <Box>
    <Box className="bg-shapes">
      <Container
        component="main"
        maxWidth="lg"
        sx={{ minHeight: "90vh" }}
        sx={{ mt: 5, mb: 10 }}
        style={{ display: "flex", justifyContent: "left" }}
      >
        <Paper sx={{ p: 2, m: "auto" }}>
          <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)}>
            <Box
              sx={{
                // backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              <Typography component="h4" variant="h4" align="left">
                Your Profile
              </Typography>
              <Link to="/onboard">Edit via onboard</Link>
            </Box>

            <Box
              sx={{
                // backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                m: 1,
              }}
            >
              {typeof profileState.logoImage == "string" ? (
                <img
                  src={`${SERVER_URL + profileState.logoImage}`}
                  height={"100px"}
                  width={"100px"}
                />
              ) : (
                <img src={previewLogo} height={"100px"} width={"100px"} />
              )}
              <TextField
                label="handleName"
                size="small"
                sx={{ m: 1, width: "100%" }}
                // rows={3}
                type="text"
                placeholder="handleName"
                id="handleName"
                value={profileState.handleName}
                onChange={(e) => handleChange(e)}
                required
              />

              <label htmlFor="btn-upload">
                <input
                  id="btn-upload"
                  name="btn-upload"
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleLogoImageChange(e)}
                />
                <Button
                  className="btn-choose"
                  variant="contained"
                  component="span"
                  size="small"
                  onChange={(e) => handleLogoImageChange(e)}
                >
                  Change Logo
                </Button>
              </label>
            </Box>
            <Divider variant="middle" />

            {/* primary Color */}
            <Box
              sx={{
                // backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              <Typography
                component="h3"
                variant="body"
                sx={{ fontWeight: "bold" }}
                align="left"
              >
                Primary Color :
              </Typography>
              <Typography
                component="p"
                variant="p"
                // sx={{ fontWeight: "bold" }}
                align="left"
              >
                {" "}
                {profileState.primaryColor}{" "}
              </Typography>

              <input
                label="change color"
                type="color"
                value={profileState.primaryColor}
                onChange={(e) => {
                  setProfileState({
                    ...profileState,
                    primaryColor: e.target.value,
                  });
                }}
              />
            </Box>

            {/* Secondary Color */}
            <Box
              sx={{
                // backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              <Typography
                component="h3"
                variant="body"
                sx={{ fontWeight: "bold" }}
                align="left"
              >
                Secondary Color :
              </Typography>
              <Typography
                component="p"
                variant="p"
                // sx={{ fontWeight: "bold" }}
                align="left"
              >
                {" "}
                {profileState.secondaryColor}{" "}
              </Typography>

              <input
                label="change color"
                type="color"
                value={profileState.secondaryColor}
                onChange={(e) => {
                  setProfileState({
                    ...profileState,
                    secondaryColor: e.target.value,
                  });
                }}
              />
            </Box>

            <Divider variant="middle" />

            <Typography
              component="h3"
              variant="body"
              sx={{ fontWeight: "bold" }}
              align="left"
            >
              Template Images
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ p: 2 }}
            >
              <Grid item xs={2} sm={4} md={4} key={1}>
                <Paper style={{ width: "100%" }}>
                  {typeof profileState.tempImage1 == "string" ? (
                    <img
                      src={SERVER_URL + profileState.tempImage1}
                      height={"200px"}
                      width={"200px"}
                    />
                  ) : (
                    <img src={preview1} height={"200px"} width={"200px"} />
                  )}
                  <label htmlFor="btn-upload-temp1">
                    <input
                      type="file"
                      id="tempImage1"
                      id="btn-upload-temp1"
                      name="btn-upload-temp1"
                      accept="image/png, image/jpeg , image/jpg"
                      style={{ display: "none" }}
                      onChange={(e) => handleTempImage1Change(e)}
                      // required
                    />
                    {/* <p>Hyeu</p> */}
                    <Button
                      className="btn-choose"
                      variant="contained"
                      component="span"
                      size="small"
                      fullWidth
                      // onChange={(e) => handleLogoImageChange(e)}
                    >
                      Template 1
                    </Button>
                  </label>
                </Paper>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={1}>
                <Paper style={{ width: "100%" }}>
                  {typeof profileState.tempImage2 == "string" ? (
                    <img
                      src={SERVER_URL + profileState.tempImage2}
                      height={"200px"}
                      width={"200px"}
                    />
                  ) : (
                    <img src={preview2} height={"200px"} width={"200px"} />
                  )}
                  <label htmlFor="btn-upload-temp2">
                    <input
                      type="file"
                      id="tempImage2"
                      id="btn-upload-temp2"
                      name="btn-upload-temp2"
                      accept="image/png, image/jpeg , image/jpg"
                      style={{ display: "none" }}
                      onChange={(e) => handleTempImage2Change(e)}
                      // required
                    />
                    {/* <p>Hyeu</p> */}
                    <Button
                      className="btn-choose"
                      variant="contained"
                      component="span"
                      size="small"
                      fullWidth
                      // onChange={(e) => handleLogoImageChange(e)}
                    >
                      Template 2
                    </Button>
                  </label>
                </Paper>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={1}>
                <Paper style={{ width: "100%" }}>
                  {typeof profileState.tempImage3 == "string" ? (
                    <img
                      src={SERVER_URL + profileState.tempImage3}
                      height={"200px"}
                      width={"200px"}
                    />
                  ) : (
                    <img src={preview3} height={"200px"} width={"200px"} />
                  )}
                  <label htmlFor="btn-upload-temp3">
                    <input
                      type="file"
                      id="tempImage3"
                      id="btn-upload-temp3"
                      name="btn-upload-temp3"
                      accept="image/png, image/jpeg , image/jpg"
                      style={{ display: "none" }}
                      onChange={(e) => handleTempImage3Change(e)}
                      // required
                    />
                    {/* <p>Hyeu</p> */}
                    <Button
                      className="btn-choose"
                      variant="contained"
                      component="span"
                      size="small"
                      fullWidth
                      // onChange={(e) => handleLogoImageChange(e)}
                    >
                      Template 3
                    </Button>
                  </label>
                </Paper>
              </Grid>
            </Grid>

            <Divider variant="middle" />

            <TextField
              label="telegramToken"
              multiline
              sx={{ m: 1, width: "100%" }}
              // rows={3}
              type="text"
              placeholder="telegramToken"
              id="telegramToken"
              value={profileState.telegramToken}
              onChange={(e) => handleChange(e)}
              // required
            />
            <br />
            <br />

            <LoadingButton
              color="primary"
              // onClick={handleClick}
              loading={reqesting}
              loadingPosition="start"
              endIcon={<UpgradeIcon />}
              variant="contained"
              type="submit"
              // fullWidth
            >
              Update Profile
            </LoadingButton>
          </Box>
          <br />
        </Paper>
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default Profile;
