import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Form from "./Form";
import { Paper } from "@material-ui/core";

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    width: "100%",
    maxWidth: "500px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function Register() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={5} className={classes.root}>
      <AppBar style={{ alignItems: "center" }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Student" {...a11yProps(0)} />
          <Tab label="Teacher" {...a11yProps(1)} />
          <Tab label="Parent" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.images}>
          <img
            style={{ width: "8%" }}
            src={require("../Assets/students-cap.png")}
          />
        </div>
        <Form />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img
          style={{ width: "8%" }}
          src={require("../Assets/teacher-at-the-blackboard.png")}
        />
        <Form />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img style={{ width: "8%" }} src={require("../Assets/parents.png")} />
        <Form />
      </TabPanel>
    </Paper>
  );
}
