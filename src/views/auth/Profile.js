import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { SketchPicker } from "react-color";

const Profile = () => {
  // let [profileState, setProfileState] = React.useState();

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
    const url = "http://127.0.0.1:8000/profile/1";

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

    let url = "http://127.0.0.1:8000/profile/1/";
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <TextField
              label="primaryColor"
              multiline
              sx={{ m: 1, width: "100%" }}
              // rows={3}
              type="text"
              placeholder="primaryColor"
              id="primaryColor"
              value={profileState.primaryColor}
              onChange={(e) => handleChange(e)}
              required
            /> */}

            <SketchPicker
              id="primaryColor"
              color={profileState.primaryColor}
              onChange={(e) => {
                setProfileState({ ...profileState, primaryColor: e.hex });
              }}
            />
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: profileState.primaryColor,
              }}
            >
              {profileState.primaryColor}
            </div>
            {/* <TextField
              label="secondaryColor"
              multiline
              sx={{ m: 1, width: "100%" }}
              // rows={3}
              type="text"
              placeholder="secondaryColor"
              id="secondaryColor"
              value={profileState.secondaryColor}
              onChange={(e) => handleChange(e)}
              required
            /> */}
            <SketchPicker
              id="primaryColor"
              color={profileState.secondaryColor}
              onChange={(e) => {
                setProfileState({ ...profileState, secondaryColor: e.hex });
              }}
            />
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: profileState.secondaryColor,
              }}
            >
              {profileState.secondaryColor}
            </div>
            <TextField
              label="handleName"
              multiline
              sx={{ m: 1, width: "100%" }}
              // rows={3}
              type="text"
              placeholder="handleName"
              id="handleName"
              value={profileState.handleName}
              onChange={(e) => handleChange(e)}
              required
            />

            <h3>Logo</h3>
            <input
              type="file"
              id="logoImage"
              accept="image/png, image/jpeg , image/jpg"
              onChange={(e) => handleLogoImageChange(e)}
              // required
            />

            {typeof profileState.logoImage == "string" ? (
              <img
                src={`http://127.0.0.1:8000${profileState.logoImage}`}
                height={"200px"}
                width={"200px"}
              />
            ) : (
              <img src={previewLogo} height={"200px"} width={"200px"} />
            )}

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
                src={`http://127.0.0.1:8000${profileState.tempImage1}`}
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
                src={`http://127.0.0.1:8000${profileState.tempImage2}`}
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
                src={`http://127.0.0.1:8000${profileState.tempImage3}`}
                height={"200px"}
                width={"200px"}
              />
            ) : (
              <img src={preview3} height={"200px"} width={"200px"} />
            )}
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
            <input type="submit" name="submit" value="Submit" />
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Profile;
