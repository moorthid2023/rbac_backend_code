import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Create a signed JWT good for 7 days.
 * Payload keeps only the user’s id to stay compact;
 * add role/email if you need them later.
 */
const generateToken = (user) => {
  return jwt.sign({ id: user.id,email:user.email,role:user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

export default generateToken;
