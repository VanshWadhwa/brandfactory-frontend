import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Fab,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";

import { Box } from "@mui/system";
import React from "react";

const NewsListItem = ({ news, editorState, setEditorState }) => {
  const changeState = () => {
    console.log(news.id);
    setEditorState({
      ...editorState,
      imageFrom: "url",
      title: news.title,
      content: news.content,
      imageURL: news.imageURL,
    });
  };

  // console.log("NewsItem");
  // console.log(news);
  return (
    <>
      <div style={{ position: "relative" }}>
        <Tooltip title="Add to Editor">
          <Fab
            aria-label="add"
            onClick={() => changeState()}
            // color="primary"
            color="text.secondary"
            style={{
              position: "absolute",
              left: "5px",
              top: "50%",
            }}
          >
            {/* <AddIcon /> */}
            <ArrowCircleLeftIcon size="large" sx={{ transform: "scale(2)" }} />
          </Fab>
        </Tooltip>
        <Card sx={{ p: 1, m: 1, ml: 4, pl: 4 }} alignItems="flex-start">
          <img
            style={{
              // maxWidth: "200px",
              // max-:100%,
              // maxHeight: "200px",
              objectFit: "cover",
              // height: "auto",
              // width: "auto",
              height: "100px",
              float: "left",

              margin: "5px",
              width: "100px",
            }}
            src={news.imageURL}
          />
          <Typography
            sx={{ textAlign: "justify" }}
            component="h5"
            variant="b"
            color="text.primary"
          >
            {news.title}
          </Typography>
          <Typography
            sx={{ textAlign: "justify" }}
            component="p"
            variant="caption"
            color="text.primary"
          >
            {news.content}
          </Typography>
        </Card>
      </div>

      {/* <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="p">
              {news.title}
            </Typography>
            <Typography variant="p" color="text.secondary" component="div">
              {news.content}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            {/* <IconButton aria-label="previous">
              {theme.direction === "rtl"
                ? // <SkipNextIcon />
                  "hey"
                : // <SkipPreviousIcon />
                  "hi"}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton> 
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={news.imageURL}
          alt="Live from space album cover"
        />
      </Card> */}
    </>
  );
};

export default NewsListItem;
