import axios from 'axios';

export function fetchCourseData() {
  let coursesPromise = fetchCourses();
  return {
    courses: wrapPromise(coursesPromise),
  };
}

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

function fetchCourses() {
  return new Promise((resolve) => {
    axios.post('/courses/get').then((res) => {
      resolve(res.data);
    });
  });
}
