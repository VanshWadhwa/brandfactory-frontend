import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListView from "./ListView";

function NewsSideBar(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

NewsSideBar.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ editorState, setEditorState }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [newsListShorts, setNewsListShorts] = React.useState([]);
  const [newsListFlips, setNewsListFlips] = React.useState([]);
  const [newsListNewsApi, setNewsListNewsApi] = React.useState([]);

  React.useEffect(() => {
    const urlShorts = `${SERVER_URL}/news/shorts`;
    const urlFlips = `${SERVER_URL}/news/flips`;
    const urlNewsApi = `${SERVER_URL}/news/newsApi`;

    const fetchDataShorts = async () => {
      try {
        const response = await fetch(urlShorts);
        const json = await response.json();
        // json.slip.advice
        setNewsListShorts(json.data);
        console.log("newsList");
        // console.log(typeof newsList);
        // console.log(json);
        // console.log(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    const fetchDataFlips = async () => {
      try {
        const response = await fetch(urlFlips);
        const json = await response.json();
        // json.slip.advice
        setNewsListFlips(json.data);
        console.log("newsList");
        // console.log(typeof newsList);
        // console.log(json);
        // console.log(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    const fetchDataNewsApi = async () => {
      try {
        const response = await fetch(urlNewsApi);
        const json = await response.json();
        // json.slip.advice
        setNewsListNewsApi(json.data);
        console.log("newsList");
        // console.log(typeof newsList);
        // console.log(json);
        // console.log(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDataShorts();
    fetchDataFlips();
    fetchDataNewsApi();
  }, []);
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <NewsSideBar value={value} index={0}>
        <ListView
          newsList={newsListShorts}
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </NewsSideBar>
      <NewsSideBar value={value} index={1}>
        <ListView
          newsList={newsListFlips}
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </NewsSideBar>
      <NewsSideBar value={value} index={2}>
        <ListView
          newsList={newsListNewsApi}
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </NewsSideBar>
    </Box>
  );
}
