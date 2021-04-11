import { Router } from 'express';
import { appointmentsController } from '../controllers/appointments.controller.js';
import { checkRole } from '../middleware/checkRole.js';
import { checkJwt } from '../middleware/checkJwt.js'

const appointmentsRoutes = Router();

appointmentsRoutes.post('/newApptts', checkJwt, checkRole, appointmentsController.newApptts);
appointmentsRoutes.get('/appttsStts', checkJwt, checkRole, appointmentsController.appttsStts);
appointmentsRoutes.patch('/appttsDlt/:id', checkJwt, checkRole, appointmentsController.appttsDlt);

export default appointmentsRoutes;

