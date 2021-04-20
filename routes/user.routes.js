import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.create);

userRoutes.get('/dashboard', checkJwt, userController.dashboard);

userRoutes.get('/list', checkJwt, checkRole, userController.userList);

userRoutes.get('/doctors', checkJwt, checkRole, userController.doctorList);

export default userRoutes;