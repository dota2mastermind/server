const User = require('../models/user');
const {OAuth2Client} = require('google-auth-library');
const clientId = '401285045793-47h57bkm2g2it25vde5ikrqu7qg5usf5.apps.googleusercontent.com'
const client = new OAuth2Client(clientId);
const axios = require('axios');
const { decodeToken } = require('../helper/helper');

module.exports = {
  loginGoogle(req, res, next) {
    axios({
      method: 'GET',
      url: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.id_token}`
    })
      .then(({data}) => {
        req.user = data
        req.body = data
        return User.findOne({
          email: data.email
        })
      })
      .then(user => {
        req.auth = 'google'
        if (user) {
          req.registered = true
          next()
        } else {
          req.registered = false
          next()
        }
      })
      .catch(err => {
        res.status(400).json({err: err.message})
      })
  },
  decode(req, res, next) {
    decodeToken(req.headers.token, (err, decoded) => {
      if(err) res.status(400).json({msg: 'Invalid token'})
      else {
        User.findOne({
          email: decoded.email
        })
          .then(user => {
            req.user = user
            next()
          })
          .catch(err => {
            res.status(400).json({msg: 'Authentication error'})
          })
      }
    })

  }
}