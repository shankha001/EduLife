require('dotenv').config();
const express = require('express');

const router = express.Router();

//===Course Model===//

const Course = require('./../models/Course');

// @route POST /courses/create
// @desc Create Course

router.post('/create', (req, res) => {
  const newCourse = new Course({
    name: req.body.name,
    description: req.body.description,
    teacherName: req.body.teacherName,
    teacherId: req.body.teacherId,
  });
  newCourse.save((err) => {
    if (err) {
      res.status(400).json({
        error: 'Saving course in DB failed',
      });
    }
    res.status(200).json(newCourse);
  });
});

// @desc Register User
module.exports = router;
