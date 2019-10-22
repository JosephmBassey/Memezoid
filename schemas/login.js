const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  userName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  }
});
module.exports = mongoose.model('Login', loginSchema);