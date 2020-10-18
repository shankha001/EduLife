import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
  },
  card: {
    width: '100%',
  },
}));
function ViewAnnouncement({ user }) {
  const [announcements, setAnnouncements] = useState({});
  const classes = useStyles();
  useEffect(() => {
    axios.get(`/announcements/view`).then((res) => setAnnouncements(res.data));
  }, []);
  return (
    <React.Fragment>
      <div className={classes.root}>
        {' '}
        {announcements.length &&
          announcements.map((announcements) => (
            <div>
              <ul>
                <li>
                  {' '}
                  <p>{announcements.name}</p>
                </li>
                <li>
                  {' '}
                  <p>{announcements.description}</p>
                </li>
                <li>
                  <p>{announcements.date}</p>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ViewAnnouncement);
