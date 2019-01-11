const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { hashPassword } = require('../helper/helper')

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    validate: {
      isAsync: true,
      validator: function(value, cb) {
        User.findOne({
          email: value
        }, function(err, result) {
          cb(!result, 'Email must unique!')
        })
      },
    },
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email not valid!"]
  },
  password: {
    type: String,
    minlength: [5, 'Minimum length is 5'],
    maxlength: [13, 'Maximum length is 13'],
    default: 'asdqwe'
  }
});

userSchema.pre('save', function(next) {
  let hash = hashPassword(this.password)
  this.password = hash
  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;