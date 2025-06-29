import {
  getAllUsersRepo,
  updateRoleRepo,
  deleteUserRepo
} from '../repositories/adminRepositories.js';

export const fetchAllUsersService = async () => {
  return await getAllUsersRepo();
};

export const changeUserRoleService = async (userId, role) => {
  if (!role) throw new Error('Role is required');
  return await updateRoleRepo(userId, role);
};

export const removeUserService = async (userId) => {
  return await deleteUserRepo(userId);
};


export const createAdminService = async (data) => {};
export const getAllAdminsService = async () => {};
export const getAdminByIdService = async (id) => {};
export const updateAdminByIdService = async (id, data) => {};
export const deleteAdminByIdService = async (id) => {};
