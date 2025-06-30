import connectMongo from '../utils/mongoClient.js';

export const findUserByEmail = async (email) => {
  const db = await connectMongo();
  return db.collection('users').findOne({ email });
};

export const createUser = async (user) => {
  const db = await connectMongo();
  return db.collection('users').insertOne(user);
};