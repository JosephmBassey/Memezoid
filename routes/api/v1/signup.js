const signupSchema = require('../../../schemas/signup');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to signup route!'
  });
});
module.exports = router;