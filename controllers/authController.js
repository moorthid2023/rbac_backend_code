import { registerService, loginService } from '../services/authService.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res) => {
  try {
    const user = await registerService(req.body);
    res.status(201).json({ user, token: generateToken(user.id) });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await loginService(req.body);
    res.json({ user, token: generateToken(user._id) });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};
// import { registerService, loginService } from '../services/authService.js';

// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;
//     await registerService({ name, email, password, role });
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const result = await loginService({ email, password });
//     res.json(result);
//   } catch (err) {
//     res.status(401).json({ error: err.message });
//   }
// };