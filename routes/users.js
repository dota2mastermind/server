var express = require('express');
var router = express.Router();
const { register, login } = require('../controllers/user');
const { loginGoogle } = require('../middleware/middleware');

router.post('/login', loginGoogle, register, login);

module.exports = router;
