const mongoose = require('mongoose');
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    default: null
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({
      id: this._id,
      email: this.email,
      username: this.username
    },
    'someSuperSecretKey',{
      expiresIn: '1h'
    }
  );
  return token;
};

function validateSignup(user) {
  const schema = Joi.object().keys( {
    name: Joi.string().min(2).max(50),
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(6).max(255).required()
  });
  return Joi.validate(user, schema);
}

const UserModel = mongoose.model('User', userSchema);

exports.UserModel = UserModel;
exports.validateSignup = validateSignup;

