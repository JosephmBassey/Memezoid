const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  userName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  }
});
module.exports = mongoose.model('Signup', signupSchema);