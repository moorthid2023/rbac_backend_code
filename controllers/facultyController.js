import { createFacultyService,getAllFacultyService, searchFacultyService ,getFacultyByIdService, getFacultyByEmailService} from "../services/facultyService.js";

export const createFaculty = async (req, res) => {
    try{
        const data = req.body;
        const result = await createFacultyService(data);
        res.status(201).json(result);

    }catch(err){
        console.log("error in createstudent in  controller ",err);
    }
};
export const getAllFaculty = async (req, res) => {
      try{
        const data = req.body;
        const result = await getAllFacultyService(data);
        res.status(201).json(result);

    }catch(err){
        console.log("error in createstudent in  controller ",err);
    }
};
export const getFacultyById = async (req, res) => {
     try {
            const id = req.params.id;
            const result = await getFacultyByIdService(id);
            res.status(200).json({result});
        } catch (error) {
            console.log("error in getstudent by id ",error)
        }
};
export const updateFacultyById = async (req, res) => {
     try {
            const email = req.user.email;
            const result = await getStudentByEmailService(email);
            res.status(200).json({result})
        } catch (error) {
            console.log("error in getstudent by email",error);
        }
};
export const getFacultyByEmail = async(req,res)=>{
    try {
        const email = req.user.email;
        const result = await getFacultyByEmailService(email);
        res.status(200).json({result})
    } catch (error) {
        console.log("error in getstudent by email",error);
         res.status(500).json({ error: 'Server error' });
    }
}
export const deleteFacultyById = async (req, res) => {};
export const searchFaculty = async (req, res) => {
    try {
        const query = req.query.name;
        const result = await searchFacultyService(query);
        res.status(201).json(result);
    } catch (error) {
        console.log("error connecting to search faculty ",error);
    }
};
export const paginateFaculty = async (req, res) => {};
