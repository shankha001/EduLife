import React, { Suspense } from 'react';
import CourseCard from '../Components/CourseCard';
import { makeStyles } from '@material-ui/core/styles';
import { fetchCourseData } from './studentData';

const resource = fetchCourseData();

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

function Student() {
  const classes = useStyles();
  return (
    <Suspense fallback={<h1>Loading posts...</h1>}>
      <Courses />
    </Suspense>
  );
}

function Courses() {
  const classes = useStyles();
  const courses = resource.courses.read();
  // console.log(courses);
  return (
    <div className={classes.root}>
      {courses.map((course) => (
        <div>
          <CourseCard
            className={classes.card}
            key={course.id}
            course={course}
          />
        </div>
      ))}
    </div>
  );
}

export default Student;
