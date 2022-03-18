import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import NewsListItem from "./NewsListItem";
import NewsListItemServerFlips from "./NewsListItemServerFlip";

export default function ListView2({ newsList, editorState, setEditorState }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        maxHeight: "80vh",
        // p: "10",
        // position:"absol"
        overflow: "auto",
      }}
    >
      {newsList.map((news, idx) => (
        // <p key={news.id}>{news.title}</p>
        //   console.log(news)
        <>
          <NewsListItemServerFlips
            news={news}
            key={idx}
            editorState={editorState}
            setEditorState={setEditorState}
          />
          {/* <Divider variant="inset" component="li" /> */}
        </>
      ))}
    </List>
  );
}
