const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  teacherName: String,
  teacherId: String,
  date: { type: Date, default: Date.now },
  chats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chats',
    },
  ],
});

module.exports = mongoose.model('Course', courseSchema);
