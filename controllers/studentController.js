import { createStudentService,getAllStudentsService,getStudentByIdService,searchStudentService,updateStudentByIdService,deleteStudentByIdService,paginateStudentsService } from "../services/studentService.js";

export const createStudent = async (req, res) => {
    try{
        const data = req.body;
        const result = await createStudentService(data);
        res.status(201).json(result);

    }catch(err){
        console.log("error in createstudent in  controller ",err);
    }
};
export const getAllStudents = async (req, res) => {
    try{
        const data = req.body;
        const results = await getAllStudentsService(data);
        res.status(200).json({results});
    }catch(err){
        console.log("error get students details ",err);
    }
};
export const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getStudentByIdService(id);
        res.status(200).json({result});
    } catch (error) {
        console.log("error in getstudent by id ",error)
    }
};
export const updateStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await updateStudentByIdService(id,data);
        res.status(200).json({result});
    } catch (error) {
        console.log("error in update student controller ",error);
    }
};
export const deleteStudentById = async (req, res) => {};
export const searchStudents = async (req, res) => {
     try{
        const query = req.query.name;
       const result = await searchStudentService(query);
       res.status(201).json({result});
    }catch(err){
        console.log("error in createstudent in  controller ",err);
    }
};
export const paginateStudents = async (req, res) => {};
