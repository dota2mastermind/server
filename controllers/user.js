const User = require('../models/user');
const { generateToken, comparePassword } = require('../helper/helper');

module.exports = {
  register(req, res, next) {
    if (req.registered) {
      next()
    } else {
      User.create({
        email: req.user.email,
        password: req.body.password
      })
        .then(user => {
          if (req.auth === 'google') {
            next()
          } else {
            res.status(201).json(user)
          }
        })
        .catch(err => {
          // console.log('register')
          res.status(500).json({err: err.message})
        })
    }
  },
  login(req, res) {
    User.findOne({
      email: req.user.email
    })
      .then(user => {
        if (req.auth === 'google' || comparePassword(req.body.password, user.password)) {
          res.status(200).json({
            user: req.user,
            token: generateToken()
          })
        } else {
          // console.log('login')
          res.status(400).json({msg: 'wrong email/password'})
        }
      })
  }
}