import React, { Suspense } from 'react';
import CourseCard from '../Components/CourseCard';
import { makeStyles } from '@material-ui/core/styles';
import { fetchProfileData } from './studentData';

const resource = fetchProfileData();

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

      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </div>
  );
}

function ProfileTimeline() {
  const courses = resource.courses.read();
  console.log(courses);
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>{course.name}</li>
      ))}
    </ul>
  );
}

export default Student;
