const profileSchema = require('../../../schemas/profile');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to profile route!'
  });
});
module.exports = router;