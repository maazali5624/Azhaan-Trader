const jwt = require('jsonwebtoken');

/**
 * Generate JWT token for user
 */
const generateToken = (id) => {
  let expireValue = (process.env.JWT_EXPIRE || '7d').trim();

  // Remove any surrounding single or double quotes (e.g., if user pastes '"7d"' or '"60"' in Vercel)
  expireValue = expireValue.replace(/^["']|["']$/g, '');

  // If the expire value is just a number (e.g. "30" or "60"), convert it to a Number type
  // jsonwebtoken expects pure numbers to be actual Number types, not numeric strings.
  if (/^\d+$/.test(expireValue)) {
    expireValue = Number(expireValue);
  }

  return jwt.sign({ id }, (process.env.JWT_SECRET || '').trim(), {
    expiresIn: expireValue,
  });
};

module.exports = generateToken;
