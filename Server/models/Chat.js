//===Chat MODEL===//

const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  user: String,
  msg: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
});

module.exports = mongoose.model('Chat', chatSchema);
