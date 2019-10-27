const express = require('express');
const router = express.Router();
const FeedModel = require('../models/Feed');
const feedController = require('../controllers/feedController')
router.get('/', feedController);
module.exports = router;