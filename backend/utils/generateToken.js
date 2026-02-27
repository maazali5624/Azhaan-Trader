const jwt = require('jsonwebtoken');

/**
 * Generate JWT token for user
 */
const generateToken = (id) => {
  return jwt.sign({ id }, (process.env.JWT_SECRET || '').trim(), {
    expiresIn: (process.env.JWT_EXPIRE || '7d').trim(),
  });
};

module.exports = generateToken;
