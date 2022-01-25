import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
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
      title: news.title,
      content: news.content,
      imageURL: news.imageURL,
    });
  };

  console.log("NewsItem");
  console.log(news);
  return (
    <>
      <ListItem sx={{ p: 0 }} alignItems="flex-start">
        <ListItemAvatar>
          <img
            style={{
              maxWidth: "200px",
              // max-:100%,
              height: "auto",
              width: "auto",
            }}
            src={news.imageURL}
          />
        </ListItemAvatar>
        <ListItemText
          primary={news.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {news.content}
              </Typography>

              <button onClick={() => changeState()}>Change State</button>
            </React.Fragment>
          }
        />
      </ListItem>

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
