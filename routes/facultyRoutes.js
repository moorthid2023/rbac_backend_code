import express from 'express';
import {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  searchFaculty,
  updateFacultyById,
  deleteFacultyById,
  getFacultyByEmail
 
} from '../controllers/facultyController.js';

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';


const router = express.Router();
router.get('/profile',authMiddleware,roleMiddleware(['faculty']),getFacultyByEmail)
// Apply auth and restrict access to "admin" only
router.use(authMiddleware);
router.use(roleMiddleware(['admin']));
router.get('/query',searchFaculty);
router.get('/', getAllFaculty);
router.get('/:id', getFacultyById);
router.post('/create', createFaculty);
router.put('/:id', updateFacultyById);
router.delete('/:id', deleteFacultyById);

export default router;
