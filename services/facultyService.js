import { createFaculty,getAllFaculty,searchFaculty,getFacultyById, getFacultyByEmail } from "../repositories/facultyRepositories.js";

export const createFacultyService = async (data) => {
    if (!data.name || !data.email) {
        res.status(400).json({ message: "All Faculty Fields are required!" });
      }
      const formattedData = {
        name: data.name,
        age: data.age,
        dept: data.dept,
        gender: data.gender,
        salary: data.salary,
        email: data.email,
        religion: data.religion,
        role:data.role,
        createdAt: new Date(),
      };
      const result = await createFaculty(formattedData);
      return result;
};
export const getAllFacultyService = async () => {
    return getAllFaculty();
};
export const getFacultyByIdService = async (id) => {
    return getFacultyById(id)
};
export const getFacultyByEmailService = async(email)=>{
  if(!email){
    console.log("faculty email required")
  }
  const result =await getFacultyByEmail(email);
  return result;
}
export const updateFacultyByIdService = async (id, data) => {};
export const deleteFacultyByIdService = async (id) => {};
export const searchFacultyService = async (query) => {
    return searchFaculty(query);
};
export const paginateFacultyService = async (page, limit) => {};
