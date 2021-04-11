import { Router } from 'express';
import { appointmentsController } from '../controllers/appointments.controller.js';

const appointmentsRoutes = Router();

appointmentsRoutes.post('/newApptts', appointmentsController.newApptts);
appointmentsRoutes.get('/appttsStts', appointmentsController.appttsStts);
appointmentsRoutes.delete('/appttsDlt/:id', appointmentsController.appttsDlt);

export default appointmentsRoutes;