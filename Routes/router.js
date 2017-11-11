var express = require('express');
var router = express.Router();
var loginController = require('../Controllers/loginController');

router.post('/CreateAccount', function(req, res) {
    loginController.CreateAccount(req, res);
});

module.exports = router;