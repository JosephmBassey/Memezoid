const feedSchema = require('../../../schemas/feed');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to feed route!'
  });
});
module.exports = router;