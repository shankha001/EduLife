require('dotenv').config();
const express = require('express');

const router = express.Router();

//===Course Model===//

const Announcement = require('./../models/Announcement');

// @route POST /courses/create
// @desc Create Course

router.post('/create', (req, res) => {
  const newAnnouncement = new Announcement({
    name: req.body.name,
    description: req.body.description,
  });
  newAnnouncement.save((err) => {
    if (err) {
      res.status(400).json({
        error: 'Saving Announcement in DB failed',
      });
    }
    res.status(200).json(newAnnouncement);
  });
});
router.get('/view', (req, res) => {
  Announcement.find({}, (err, announcements) => {
    if (!err) {
      res.json(announcements);
    }
  });
});
// @desc Register User
module.exports = router;
