import { Appointments } from '../models/appointments.js';

export const appoinmentsController = {
    create: async (req, res) => {
        try {
            const newAppointments = {
                date: req.headers.date,
                time: req.headers.time,
                status: req.headers.status,
                //usersAppointments

            }
            await Appointments.create(newAppointments)
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}