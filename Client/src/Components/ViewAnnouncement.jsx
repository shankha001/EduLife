import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  row: {
    margin: '40px auto 20px',
    flexDirection: 'row',
    width: '60%',
  },
  root: {
    display: 'flex',
  },
  details: {
    padding: '0 20px',
    width: '70%',
  },
  date: {
    paddingTop: '10px',
    textAlign: 'center',
    width: '30%',
  },
}));
function ViewAnnouncement({ user }) {
  const [announcements, setAnnouncements] = useState({});
  const classes = useStyles();
  useEffect(() => {
    axios.get(`/announcements/view`).then((res) => setAnnouncements(res.data));
  }, []);
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <div style={{ width: '100%' }}>
          <Typography
            style={{ textAlign: 'center', marginTop: '20px' }}
            variant="h4"
            component="h4"
            gutterBottom
          >
            Announcements
            <img
              style={{ width: '40px', marginLeft: '10px' }}
              src={require('../Assets/announce.png')}
              alt="Student"
            />
          </Typography>
          <Paper elevation={3} className={classes.row}>
            {' '}
            {announcements.length &&
              announcements.map((announcements) => (
                <div className={classes.root}>
                  <Typography className={classes.date} variant="subtitle2">
                    {`${new Date(announcements.date).getDate()}, `}
                    {`${months[new Date(announcements.date).getMonth()]} `}
                    {new Date(announcements.date).getFullYear()}
                  </Typography>

                  <div className={classes.details}>
                    <Typography variant="h5">{announcements.name}</Typography>
                    <Typography style={{ color: 'grey' }} variant="subtitle1">
                      {announcements.description}
                    </Typography>
                    <hr />
                  </div>
                </div>
              ))}
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ViewAnnouncement);
