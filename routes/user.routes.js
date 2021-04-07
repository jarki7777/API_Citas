import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.create);

export default userRoutes;