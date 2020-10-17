const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const Course = require('../models/Course');

// @route POST chats/:courseid/new
// @desc new note

router.post('/:courseid/new', async (req, res) => {
  const course = await Course.findOne({ _id: req.params.courseid });

  const newChat = new Chat({
    user: req.body.user,
    msg: req.body.msg,

    course: course._id,
  });
  await newChat.save();

  course.chats.push(newChat._id);
  await course.save();
  // console.log(user);
  res.send(newChat);
});

// @route POST notes/:noteid/view
// @desc view note
router.get('/:noteid/view', async (req, res) => {
  const popNotes = await User.findOne({ _id: req.params.noteid }).populate(
    'notes'
  );
  res.json(popNotes.notes);
});

module.exports = router;
