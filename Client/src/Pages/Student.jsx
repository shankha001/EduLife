import React, { useState, useEffect } from 'react';
import CourseCard from '../Components/CourseCard';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Skeleton from '@material-ui/lab/Skeleton';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
    height: '100vh',
  },
  card: {
    width: '100%',
  },
}));

function Student() {
  return <Courses />;
}

function Courses() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState({});
  // console.log(courses);
  useEffect(() => {
    axios.post('/courses/get').then((res) => {
      setLoading(false);
      setCourses(res.data);
    });
  }, []);
  return (
    <div className={classes.root}>
      {loading ? (
        <div height={300}>
          <Skeleton animation="wave" variant="text" />
          <div style={{ position: 'relative', height: '40px' }}>
            <Skeleton
              variant="circle"
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '0',

                height: '100%',
              }}
              width={40}
            />
          </div>

          <Skeleton animation="wave" variant="rect" width={210} height={140} />
          <Skeleton animation="wave" variant="text" />
        </div>
      ) : (
        courses.length &&
        courses.map((course) => (
          <CourseCard
            className={classes.card}
            key={course.id}
            course={course}
          />
        ))
      )}
    </div>
  );
}

export default Student;
