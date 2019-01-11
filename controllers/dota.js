const axios = require('axios')
const url = 'https://api.opendota.com/api/'

//ee
class DotaController {
  static getTeams(req, res) {
    axios.get(`${url}/teams`)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message
      })
    });
  }

  static getPlayers(req, res) {
    axios.get(`${url}/proPlayers`)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message
      })
    });
  }

  static getPlayerDetail(req, res) {
    axios.get(`${url}/players/${req.params.playerId}`)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message
      })
    });
  }

  static getPlayersTeam(req, res) {
    axios.get(`${url}/teams/${req.params.teamId}/players`)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message
      })
    });
  }

  static getTeamDetail(req, res) {
    axios.get(`${url}/teams/${req.params.teamId}`)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message
      })
    });
  }
}

module.exports = DotaController