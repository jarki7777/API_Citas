import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';

const authRoutes = Router();

authRoutes.post('/login', authController.authenticate);

authRoutes.get('/logout', authController.logout);

export default authRoutes;