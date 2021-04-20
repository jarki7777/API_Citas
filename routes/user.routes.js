import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.create);

userRoutes.get('/dashboard', checkJwt, userController.dashboard);

userRoutes.post('/list', checkJwt, checkRole, userController.userList);

export default userRoutes;