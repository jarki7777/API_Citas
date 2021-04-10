import { Appointments } from '../models/appointments.js';
import { Users } from '../models/users.js';
import { Doctors } from '../models/doctors.js';

export const appointmentsController = {
    newApptts: async (req, res) => {
        try {
            const newAppointments = {
                date: req.body.date,
                time: req.body.time,
                status: req.body.status,
                usersId: req.body.usersId,
                doctorsId: req.body.doctorsId,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
            await Appointments.create(newAppointments)
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },

    appttsStts: async (req, res) => {
        try {
            const appttsStatus = await Appointments.find({
                include: [
                    {
                        model: Appointments
                    }
                ], attributes: ['date', 'time', 'status']
            })
                if (appttsStatus.date >= Date.now()) {
                    res.status(200).send(appttsStatus)
                } else if (appttsStatus.date < Date.now()) {
                    res.status(200).send(appttsStatus.status['missed'])
                } else {res.status(200).send(appttsStatus.status['canceled'])}
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },

    appttsDlt: async (req, res) => {
        try {
            const appttsDlt = await Appointments.findByIdAndDelete(req.params.id)
            res.sendStatus(200).send(appttsDlt)
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
}


