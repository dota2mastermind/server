const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  generateToken(id, email) {
    let token = jwt.sign({ id, email }, 'shhhhh');
    return token
  },
  decodeToken(token, cb) {
    jwt.verify(token, 'shhhhh', function(err, decoded) {
      if (!err) cb(null, decoded)
      else cb(err)
    });
  },
  hashPassword(password) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash
  },
  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}