const jwt = require('jsonwebtoken')
const  {compare, hash} =  require('bcryptjs');
const {UserModel,validateSignup,validateLogin} = require('../models/User')

class User {
  static async signup(req, res, next) {
    try {
      const {error}  = validateUser(req.body);
      if (error) return res.status(422).json({
        status: false,
        error: error.details[0].message
      });
      const emailExist = await UserModel.findOne({
        email: req.body.email
      });
      const usernameExist = await UserModel.findOne({
        username: req.body.username
      });
      if (usernameExist) return res.status(400).json({
        status: false,
        message: 'User with this username already registered.'
      });
      if (emailExist) return res.status(400).json({
        status: false,
        message: 'User with this email address already registered.'
      });
      const hashPassword = await hash(req.body.password, 12);
      const user = new UserModel({
        ...req.body,
        password: hashPassword,
      });
      const newUser = await user.save();
      const token = user.generateAuthToken();

      return res.status(201).json({
        status: true,
        message:  'created successfully',
        token
      });
    } catch (error) {
      // console.log(error)
      res.status(400).json({
        status: false,
        message: error
      });
    }
  }
  static async profile(req, res, next) {
    try {
      const user = await UserModel.findById(req.app.user).select('-password');
      return res.status(200).json(user);
    } catch (error) {
      console.error(error)
      res.status(400).json({
        status: false,
        error: 'unable to fetch profile'
      });

    }
  }
  static async login(req, res, next) {
    try {
      if (!req.body) return res.status(400).json({
        status: false,
        message: 'username and password required'
      });
      const user = await UserModel.findOne({
        username: req.body.username
      });
      if (!user) return res.status(400).json({
        error: 'invalid username or password combination'
      });
      const validPassword = await compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(400).json({
          error: 'invalid username or password combination'
        });
      }
      const token = user.generateAuthToken();
      res.status(200).json({
        status: true,
        message: 'login successful',
        token
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.details[0].message
      });

    }
  }
}
module.exports = User