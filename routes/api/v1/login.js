const loginSchema = require('../../../schemas/login');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to login route!'
  });
});
module.exports = router;