import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Editor from "./Editor";
import NewsSideBar from "./NewsSideBar";

const GodModeEditor = () => {
  let [editorState, setEditorState] = useState({
    imageFrom: "upload",
    title: "",
    content: "",
    image: null,
    imageURL: "",
    // "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/01_jan/3_mon/img_1641215391487_223.jpg",
    cropType: "corner",
    isAddGradient: true,
    isAddBranding: true,
    isAddTitleText: true,
    titleTextPosition: "bottom",
    titleTextAlignment: "justified",
    temp: "temp1",
    isContainImportantWords: false,
    savedFilename: null,
    finalImage: null,
  });
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
        }}
      >
        {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm"> */}
        <Container component="main" maxWidth="md">
          {/* <Typography variant="h4" component="h4" gutterBottom> */}
          {/* God Mode Editor */}
          {/* <NewsList
              editorState={editorState}
              setEditorState={setEditorState}
            /> */}
          {/* </Typography> */}
          <br />
          <Editor editorState={editorState} setEditorState={setEditorState} />
        </Container>

        {/* <ListView /> */}

        <NewsSideBar
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </Box>
    </div>
  );
};

export default GodModeEditor;
