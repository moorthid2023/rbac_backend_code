

import connectMongo from '../utils/mongoClient.js';
import { ObjectId } from 'mongodb';

export const getAllUsersRepo = async () => {
  const db = await connectMongo();
  return await db.collection('users').find().toArray();
};

export const updateRoleRepo = async (userId, role) => {
  const db = await connectMongo();
  return await db.collection('users').updateOne(
    { _id: new ObjectId(userId) },
    { $set: { role } }
  );
};

export const deleteUserRepo = async (userId) => {
  const db = await connectMongo();
  return await db.collection('users').deleteOne({ _id: new ObjectId(userId) });
};


export const createAdmin = async (adminData) => {};
export const getAllAdmins = async () => {};
export const getAdminById = async (id) => {};
export const updateAdminById = async (id, updateData) => {};
export const deleteAdminById = async (id) => {};
