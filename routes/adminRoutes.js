import express from 'express';
import {
  getAllUsers,
  updateUserRole,
  deleteUserAccount
} from '../controllers/adminController.js';

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

const router = express.Router();

// Middleware: must be authenticated AND admin
router.use(authMiddleware);
router.use(roleMiddleware(['admin']));

// Admin routes
router.get('/users', getAllUsers);
router.put('/users/:id/role', updateUserRole);
router.delete('/users/:id', deleteUserAccount);

export default router;
