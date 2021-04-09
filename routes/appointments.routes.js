import { Router } from 'express';
import { appointmentsController } from '../controllers/appointments.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';

const appointmentsRoutes = Router();

appointmentsRoutes.post('/appointmentsCreate', appointmentsController.create);
appointmentsRoutes.get('/appointmentsRead', appointmentsController.read);

export default appointmentsRoutes;