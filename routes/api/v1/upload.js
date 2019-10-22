const uploadSchema = require('../../../schemas/upload');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to upload route!'
  });
});
module.exports = router;