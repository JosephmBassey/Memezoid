const express = require('express');
const userController = require('../controllers/userController')
const userAuth = require('../middleware/userAuth')
const router = express.Router();

/*
    @api {GET} /v1/random/ Generate a random number
    @apiName GetRandomNumber
    @apiGroup Random

    @apiDescription Generates a random number in the range `[0.0, 1.0)`.

    @apiSuccess (Success 200) {UUID}   request_id Unique id for the request
    @apiSuccess (Success 200) {Number} results    Random number in `[0.0, 1.0)`

    @apiSampleRequest /v1/random/

    @apiExample cURL example
    $ curl https://apidoc-example.herokuapp.com/api/v1/random/

    @apiSuccessExample {js} Success-Response:
        HTTP/1.0 200 OK
        {
            "request_id": "ad506913-a073-4d23-9f95-388d1c1e2c46",
            "result": 0.3606252123151169
        }
*/
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile', userAuth, userController.profile);

module.exports = router;