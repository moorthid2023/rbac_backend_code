import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  searchStudent,
  paginateStudents,
  getStudentByEmail
} from "../repositories/studenRepositories.js";

export const createStudentService = async (data) => {
  if (!data.name || !data.email) {
    res.status(400).json({ message: "All student Fields are required!" });
  }
  const formattedData = {
    name: data.name,
    age: data.age,
    dept: data.dept,
    gender: data.gender,
    fees: data.fees,
    email: data.email,
    religion: data.religion,
    role:data.role,
    createdAt: new Date(),
  };
  const result = await createStudent(formattedData);
  return result;
};
export const getAllStudentsService = async () => {
  return getAllStudents();
};
export const getStudentByIdService = async (id) => {
  return getStudentById(id);
};
export const getStudentByEmailService = async(email)=>{
  if(!email){
    res.status(400).json({message:"email required !"});
  }
  const result = getStudentByEmail(email);
  return result;
}
export const updateStudentByIdService = async (id, data) => {
  if (!data) {
    res.status(400).json({ message: "data required" });
  }
  const result = updateStudentById(id, data);
  return result;
};
export const deleteStudentByIdService = async (id) => {};
export const searchStudentService = async (query) => {
  return searchStudent(query);
};
export const paginateStudentsService = async (page, limit) => {};
