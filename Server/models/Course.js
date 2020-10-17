const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  teacherName: String,
  teacherId: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', courseSchema);
