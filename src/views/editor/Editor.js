import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
// import LoadingButton from "@mui/lab/LoadingButton";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { LoadingButton, TabContext, TabList, TabPanel } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

import axios from "axios";
import {
  Button,
  ButtonGroup,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  Switch,
  Tab,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import { Box, maxWidth } from "@mui/system";

const Editor = ({ editorState, setEditorState }) => {
  let downloadBase64ImgStr = "";

  // TEST
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const [reqesting, setRequesting] = React.useState(false); //for download button loading

  function handleClick() {
    setRequesting(true);
  }

  const [tabValue, setTabValue] = React.useState(editorState.imageFrom);

  const handleTabChange = (event, newTabValue) => {
    // // console.log(newTabValue);
    // if (newTabValue === "1") {
    //   console.log("-----------");

    //   // console.log(newTabValue);
    //   setEditorState({ ...editorState, imageFrom: "upload" });

    //   // console.log(editorState.imageFrom);
    //   // console.log(editorState);
    // } else {
    //   console.log("-----------");

    //   // console.log(newTabValue);

    setEditorState({ ...editorState, imageFrom: newTabValue });

    // console.log(editorState.imageFrom);
    // console.log(editorState);
    // }
    // setTabValue(newTabValue);
    console.log(editorState.imageFrom);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  let handleChange = (e) => {
    setEditorState({ ...editorState, [e.target.id]: e.target.value });
  };

  const handleChangeToggle = (e, editorState) => {
    console.log("handle change ; ");
    // console.log([e.target.parentElement.id]);
    setEditorState({
      ...editorState,
      [e.target.parentElement.id]: e.target.value,
    });
  };

  const handleChangeSelect = (e) => {
    console.log("handle change ; ");
    // console.log([e.target.id]);
    console.log(e.target.value);
    // console.log(editorState.temp);
    setEditorState({
      ...editorState,
      temp: e.target.value,
    });
  };

  // handleCheckboxChange
  let handleCheckboxChange = (e) =>
    setEditorState({ ...editorState, [e.target.id]: e.target.checked });
  let handleImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    setEditorState({
      ...editorState,
      image: e.target.files[0],
    });
  };

  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.replace("http://localhost:3000/login");
    } else {
      fetch("http://127.0.0.1:8000/api/v1/users/auth/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

  let handleSubmit = (e) => {
    setRequesting(true);

    e.preventDefault();
    console.log("Request Data : ");
    console.log(editorState);
    let form_data = new FormData();
    form_data.append("imageFrom", editorState.imageFrom);
    form_data.append("title", editorState.title);
    form_data.append("content", editorState.content);

    try {
      form_data.append("image", editorState.image, editorState.image.name);
    } catch {
      // form_data.append("image", editorState.image, "empty image");

      console.log("Aaj to url se upload ho rhi hai");
    }
    form_data.append("imageURL", editorState.imageURL);

    form_data.append("cropType", editorState.cropType);
    form_data.append("isAddGradient", editorState.isAddGradient);
    form_data.append("isAddBranding", editorState.isAddBranding);
    form_data.append("isAddTitleText", editorState.isAddTitleText);
    form_data.append("titleTextPosition", editorState.titleTextPosition);
    form_data.append("titleTextAlignment", editorState.titleTextAlignment);
    form_data.append(
      "isContainImportantWords",

      editorState.isContainImportantWords
    );
    form_data.append("temp", editorState.temp);

    form_data.append("savedFilename", editorState.savedFilename);
    form_data.append("abcd", editorState.savedFilename);

    let url = "http://127.0.0.1:8000/posts/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        // editorState.finalImage = res.data["imgLocation"];
        // contentType = "image/png";
        // const linkSource = `data:${contentType};base64,${res.data["report"]}`;

        console.log('res.data["savedFileName"]');
        console.log(res.data["savedFileName"]);
        let savedFilename = res.data["savedFileName"].split(".")[0];
        console.log(savedFilename);
        const linkSource = `data:image/png;base64,${res.data["report"]}`;
        let downloadLink = document.createElement("a");
        downloadLink.href = linkSource;

        // downloadLink.download = res.data["savedFilename"];
        downloadLink.download = savedFilename;

        downloadLink.click();

        downloadBase64ImgStr = res.data["report"];
        // console.log(editorState.finalImage);
        // console.log(this.downloadBase64ImgStr);
        // console.log(typeof res.data["report"]);
        // setRequesting(false);
      })

      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setRequesting(false);
      });
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        sx={{ display: "inline" }}
        component="span"
        variant="body2"
        color="text.primary"
      >
        Loged in as {userEmail}
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={2}>
          {/* {userEmail} */}
          {/* <h1>h</h1> */}
          <Grid item md={4}>
            {/* <Item>Image Containere</Item> */}
            <TabContext value={editorState.imageFrom}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="From Upload" value="upload" />
                  <Tab label="From Url" value="url" />
                </TabList>
              </Box>
              <TabPanel value="upload">
                {" "}
                <input
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg , image/jpg"
                  onChange={(e) => handleImageChange(e)}
                  required
                />
                {selectedFile && (
                  <img
                    style={{
                      maxWidth: "100%",
                      // max-:100%,
                      height: "auto",
                      width: "auto",
                    }}
                    src={preview}
                  />
                )}
              </TabPanel>
              <TabPanel value="url">
                {" "}
                <TextField
                  // id="outlined-multiline-static"
                  label="imageURL"
                  multiline
                  sx={{ width: "100%" }}
                  rows={3}
                  type="text"
                  placeholder="imageURL"
                  id="imageURL"
                  value={editorState.imageURL}
                  onChange={(e) => handleChange(e)}
                  required
                  // defaultValue="Default Value"
                />
                <img
                  style={{
                    maxWidth: "100%",
                    // max-:100%,
                    height: "auto",
                    width: "auto",
                  }}
                  src={editorState.imageURL}
                />
              </TabPanel>
            </TabContext>
          </Grid>
          <Grid item md={8}>
            {/* <Item>Text</Item> */}
            <TextField
              // id="outlined-multiline-static"
              label="Title"
              multiline
              sx={{ m: 1, width: "100%" }}
              rows={3}
              type="text"
              placeholder="Title"
              id="title"
              value={editorState.title}
              onChange={(e) => handleChange(e)}
              required
              // defaultValue="Default Value"
            />
            <TextField
              // id="outlined-multiline-static"
              label="Content"
              multiline
              sx={{ m: 1, width: "100%" }}
              rows={3}
              type="text"
              placeholder="Content"
              id="content"
              value={editorState.content}
              onChange={(e) => handleChange(e)}
              // required
              // defaultValue="Default Value"
            />
          </Grid>

          <Grid item md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>

          <Grid container md={8}>
            {/* <Item>xs=6 md=8</Item> */}

            <Grid item md={7}>
              <FormLabel id="">Image Crop Type</FormLabel>
              <br />
              <ToggleButtonGroup
                color="primary"
                value={editorState.cropType}
                exclusive
                // id="titleTextPosition"
                // onChange={handleChangeToggle}
                onChange={handleChange}
              >
                <ToggleButton id="cropType" value="corner">
                  Corner
                </ToggleButton>
                <ToggleButton id="cropType" value="center">
                  Center
                </ToggleButton>
              </ToggleButtonGroup>
              <br />
              <FormLabel id="">Title Text Position</FormLabel>
              <ToggleButtonGroup
                color="primary"
                value={editorState.titleTextPosition}
                exclusive
                // id="titleTextPosition"
                // onChange={handleChangeToggle}
                onChange={handleChange}
              >
                <ToggleButton id="titleTextPosition" value="top">
                  Top
                </ToggleButton>
                <ToggleButton id="titleTextPosition" value="center">
                  Center
                </ToggleButton>
                <ToggleButton id="titleTextPosition" value="bottom">
                  Bottom
                </ToggleButton>
              </ToggleButtonGroup>
              <br />
              <FormLabel id="">Title Text Alignment</FormLabel>

              <ToggleButtonGroup
                color="primary"
                value={editorState.titleTextAlignment}
                exclusive
                // id="titleTextPosition"
                // onChange={handleChangeToggle}
                onChange={handleChange}
              >
                <ToggleButton id="titleTextAlignment" value="justified">
                  Justified
                </ToggleButton>
                <ToggleButton id="titleTextAlignment" value="center">
                  Center
                </ToggleButton>
                <ToggleButton id="titleTextAlignment" value="leftAlign">
                  Left Align
                </ToggleButton>
              </ToggleButtonGroup>
              <br />
              <Select
                labelId="demo-simple-select-label"
                id="temp"
                value={editorState.temp}
                label="temp"
                onChange={handleChangeSelect}
              >
                <MenuItem value="temp1" id="temp">
                  Template 1
                </MenuItem>
                <MenuItem value="temp2" id="temp">
                  Template 2
                </MenuItem>
                <MenuItem value="temp3" id="temp">
                  Template 3
                </MenuItem>
              </Select>
            </Grid>
            <Grid item md={5}>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.gilad}
                    id="isAddGradient"
                    name="isAddGradient"
                    checked={editorState.isAddGradient}
                    // onChange={handleChange}
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                }
                label="Add Gradient"
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.gilad}
                    id="isAddBranding"
                    name="isAddBranding"
                    checked={editorState.isAddBranding}
                    // onChange={handleChange}
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                }
                label="Add Branding"
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.gilad}
                    id="isContainImportantWords"
                    name="isContainImportantWords"
                    checked={editorState.isContainImportantWords}
                    // onChange={handleChange}
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                }
                label="Contain Important Words"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* <input type="submit" /> */}
        <LoadingButton
          color="primary"
          // onClick={handleClick}
          loading={reqesting}
          loadingPosition="start"
          startIcon={<CloudDownloadIcon />}
          variant="contained"
          type="submit"
        >
          Download
        </LoadingButton>

        {/* TEST */}
        <div>{/* <input type="file" onChange={onSelectFile} /> */}</div>
      </form>
    </Box>
  );
};

export default Editor;
