const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to your server!'
  });
});
module.exports = router;