import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from './Form';
import { Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    width: '100%',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  images: {
    width: '40px',
  },
}));

export default function Register() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root} maxWidth="xs">
      <Paper elevation={5}>
        <AppBar
          style={{ alignItems: 'center' }}
          position="static"
          component="main"
          maxWidth="xs"
        >
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
          <div>
            <img
              className={classes.images}
              src={require('../Assets/students-cap.png')}
            />
          </div>
          <Form />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img
            className={classes.images}
            src={require('../Assets/teacher-at-the-blackboard.png')}
          />
          <Form />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img
            className={classes.images}
            src={require('../Assets/parents.png')}
          />
          <Form />
        </TabPanel>
      </Paper>
    </Container>
  );
}
