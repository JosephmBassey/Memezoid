const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  // Data goes here
});
module.exports = mongoose.model('Profile', profileSchema);