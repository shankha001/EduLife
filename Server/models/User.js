//===User MODEL===//

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  password: String,
  favorite: Array,

  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
