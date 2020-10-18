const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const Course = require('../models/Course');

// @route POST chats/:courseid/new
// @desc new chat

router.post('/:courseid/new', async (req, res) => {
  const course = await Course.findOne({ _id: req.params.courseid });

  const newChat = new Chat({
    userId: req.body.userId,
    userName: req.body.userName,
    msg: req.body.msg,

    course: course._id,
  });
  await newChat.save();

  course.chats.push(newChat._id);
  await course.save();
  // console.log(user);
  res.send(newChat);
});

// @route POST chats/:courseid/view
// @desc view chats
router.get('/:courseid/view', async (req, res) => {
  const popChats = await Course.findOne({ _id: req.params.courseid }).populate(
    'chats'
  );

  res.json(popChats.chats);
});

module.exports = router;
