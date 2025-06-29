import {
  fetchAllUsersService,
  changeUserRoleService,
  removeUserService
} from '../services/adminService.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await fetchAllUsersService();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const result = await changeUserRoleService(id, role);
    res.json({ message: 'User role updated', result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUserAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await removeUserService(id);
    res.json({ message: 'User deleted', result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



export const createAdmin = async (req, res) => {};
export const getAllAdmins = async (req, res) => {};
export const getAdminById = async (req, res) => {};
export const updateAdminById = async (req, res) => {};
export const deleteAdminById = async (req, res) => {};
export const searchAdmins = async (req, res) => {};
export const paginateAdmins = async (req, res) => {};
