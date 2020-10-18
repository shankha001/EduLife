import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import AddCourse from '../Components/AddCourse';
import CourseCard from '../Components/CourseCard';
import Announcement from '../Components/Announcement';
import AddResource from '../Components/AddResource';
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
function Teacher({ user }) {
  const [courses, setCourses] = useState({});
  const classes = useStyles();
  useEffect(() => {
    axios
      .post(`/courses/getTeachers/${user.currentUser.id}`)
      .then((res) => setCourses(res.data));
  }, [user.currentUser.id]);
  return (
    <React.Fragment>
      <AddCourse />
      <Announcement />
      <AddResource />
      <div className={classes.root}>
        {courses.length &&
          courses.map((course) => (
            <div>
              <CourseCard
                className={classes.card}
                key={course.id}
                course={course}
              />
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Teacher);
