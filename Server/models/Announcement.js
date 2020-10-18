const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Announcement', announcementSchema);
