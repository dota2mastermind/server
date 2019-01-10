var express = require('express');
var router = express.Router();
const DotaController = require('../controllers/dota')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/teams', DotaController.getTeams)

router.get('/players', DotaController.getPlayers)

router.get('/players/:playerId', DotaController.getPlayerDetail)

router.get('/teams/:teamId', DotaController.getTeamDetail)

router.get('/teams/:teamId/players', DotaController.getPlayersTeam)



module.exports = router;
