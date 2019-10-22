const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  // Data goes here
});
module.exports = mongoose.model('Feed', feedSchema);