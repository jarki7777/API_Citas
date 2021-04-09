import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';

const userRoutes = Router();

userRoutes.post('/signup', userController.create);

userRoutes.get('/dashboard', checkJwt, userController.dashboard);

export default userRoutes;