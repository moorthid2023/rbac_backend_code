import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
  searchStudents
} from '../controllers/studentController.js';
// import authMiddleware from '../middleware/authMiddleware.js';
// import roleMiddleware from '../middleware/roleMiddleware.js';

const router = express.Router();

// Apply auth and restrict access to "admin" and "faculty"
// router.use(authMiddleware);
// router.use(roleMiddleware(['admin', 'faculty']));
router.get('/query',searchStudents);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/create', createStudent);
router.put('/:id', updateStudentById);
router.delete('/:id', deleteStudentById);

export default router;
