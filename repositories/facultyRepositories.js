import { ObjectId } from 'mongodb';
import connectMongo from '../utils/mongoClient.js'

export const createFaculty = async (facultyData) => {
     try{
    const db = await connectMongo();
    const data = facultyData;
    const result = db.collection('faculty').insertOne(data);
    return result;
    }catch(err){
        console.log(" error in createFacultyRepo",err)
    }
};
export const getAllFaculty = async () => {
      try{
    const db = await connectMongo();
    let  data =  await db.collection('faculty').find().toArray();
    return data;
    }catch(err){
        console.log(" error in createFacultyRepo",err)
    }
};
export const getFacultyById = async (id) => {
     try {
        const db = await connectMongo();
        const data = db.collection('faculty').findOne({_id:new ObjectId(id)});
        return data;
    } catch (error) {
        console.log("error in faculty search by id ",id);
    }
};
export const updateFacultyById = async (id, updateData) => {};
export const deleteFacultyById = async (id) => {};
export const searchFaculty = async (query) => {
    try {
        const db = await connectMongo();
        let data = await db.collection('faculty').find({ name: { $regex: new RegExp(query, 'i') } }).toArray();
        return data;
    } catch (error) {
        console.log("error connecting to search faculty ",error);
    }
};
