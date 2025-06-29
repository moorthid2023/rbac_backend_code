import express from 'express';
import {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  updateFacultyById,
  deleteFacultyById
 
} from '../controllers/facultyController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

const router = express.Router();

// Apply auth and restrict access to "admin" only
router.use(authMiddleware);
router.use(roleMiddleware(['admin']));

router.get('/', getAllFaculty);
router.get('/:id', getFacultyById);
router.post('/', createFaculty);
router.put('/:id', updateFacultyById);
router.delete('/:id', deleteFacultyById);

export default router;
