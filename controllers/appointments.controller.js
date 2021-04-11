import { Users, Appointments, Doctors } from '../models/index.js';
import pkg from 'sequelize';

const { Op } = pkg;



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
            const appttsStatus = await Appointments.findAll({
                where: {
                    date: {
                        [Op.gte]: Date.now()
                    }
                },
                include: [
                    {
                        model: Users,
                        attributes: ['email', 'name']
                    },
                    {
                        model: Doctors,
                        attributes: ['name', 'speciality']
                    }
                ], attributes: ['date', 'time', 'status']
            });
            res.status(200).send(appttsStatus)

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


