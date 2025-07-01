// export const registerService = async ({ name, email, password, role }) => {};
// export const loginService = async ({ email, password }) => {};
// export const getProfileService = async (userId) => {}; // Optional
import bcrypt from 'bcryptjs';
import { findUserByEmail, createUser } from '../repositories/authRepositories.js';

export const registerService = async ({ name, email, password, role }) => {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error('Email already registered');
  const hashed = await bcrypt.hash(password, 10);
  await createUser({ name, email, password: hashed, role });
};

export const loginService = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');
  // Generate JWT

  return { id:user.id, role: user.role, name: user.name };
};