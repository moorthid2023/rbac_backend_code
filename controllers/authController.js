import { registerService, loginService } from '../services/authService.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res) => {
  try {
    const user = await registerService(req.body);
    res.status(201).json({ user, token: generateToken(user) });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await loginService(req.body);
    res.json({ user, token: generateToken(user) });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};
