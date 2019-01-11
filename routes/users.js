var express = require('express');
var router = express.Router();
const { register, login } = require('../controllers/user');
const { loginGoogle, getReqUser } = require('../middleware/middleware');

router.post('/register', register);
router.post('/login', login);
router.post('/google', loginGoogle, register, login);

module.exports = router;
