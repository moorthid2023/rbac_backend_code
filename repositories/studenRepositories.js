import connectMongo from '../utils/mongoClient.js';

import { ObjectId}  from 'mongodb';

export const createStudent = async (studentData) => {
    try{
    const db = await connectMongo();
    const data = studentData;
    const result = db.collection('students').insertOne(data);
    return result;
    }catch(err){
        console.log(" error in createStudenRepo",err)
    }
    
};
export const getAllStudents = async () => {
   
     try{
    const db = await connectMongo();
    let  data =  await db.collection('students').find().toArray();
    return data;
    }catch(err){
        console.log(" error in createStudenRepo",err)
    }
    
};
export const getStudentById = async (id) => {
    
    try {
        const db = await connectMongo();
        const data = db.collection('students').findOne({_id:new ObjectId(id)});
        return data;
    } catch (error) {
        console.log("error in student search by id ",id);
    }
};
export const updateStudentById = async (id, updateData) => {
 try{
    const db = await connectMongo();
    if('_id' in updateData){
        delete updateData._id;
    }
    let  data =  await db.collection('students').updateOne({_id:new ObjectId(id)},{$set:updateData});
    return data;
    }catch(err){
        console.log(" error in update StudenRepo",err)
    }

};
export const deleteStudentById = async (id) => {
    return await connectMongo.collection('students').deleteOne({_id:new ObjectId(id)});
};
export const searchStudent = async (query) => {
     try{
    const db = await connectMongo();
    let  data =  await db.collection('students').find({ name: { $regex: new RegExp(query, 'i') } }).toArray();
    return data;
    }catch(err){
        console.log(" error in createStudenRepo",err)
    }
};

export const getStudentByEmail = async(email)=>{
    try {
        const db = await connectMongo();
        let data = await db.collection('students').findOne({email})
        return data;
    } catch (error) {
        console.log("error connecting to getstudent by email",error);
    }
}

export const paginateStudents = async()=>{};