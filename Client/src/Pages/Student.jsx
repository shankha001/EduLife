import React from 'react';
import CourseCard from '../Components/CourseCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
  },
}));
function Student() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CourseCard />
    </div>
  );
}

export default Student;
