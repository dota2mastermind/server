var express = require('express');
var router = express.Router();
const heroesController = require('../controllers/heroes')

router.get('/', heroesController.getHero)


module.exports = router;