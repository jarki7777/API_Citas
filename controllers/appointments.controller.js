import { Users, Appointments, Doctors } from '../models/index.js';

export const appointmentsController = {
    newApptts: async (req, res) => {
        try {
            const newAppointment = {
                date: req.body.date,
                status: req.body.status,
                usersId: req.body.usersId,
                doctorsId: req.body.doctorsId,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            const appointmentDoctorExist = await Appointments.findOne({
                where: {
                    date: newAppointment.date,
                    doctorsId: newAppointment.doctorsId
                }
            });

            const appointmentClientExist = await Appointments.findOne({
                where: {
                    date: newAppointment.date,
                    usersId: newAppointment.usersId
                }
            });

            if (appointmentDoctorExist && appointmentDoctorExist.status === 'pending') {
                res.status(400).send({'message': 'Doctor is busy at that time, please select a different time or doctor', 'code': 3});
            } else if (appointmentClientExist) {
                res.status(400).send({'message': 'Client already has an appointment at that time', 'code': 4});
            } else {
                await Appointments.create(newAppointment);
                res.sendStatus(201);
            }
            res.status(200);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },

    appttsStts: async (req, res) => {

        try {
            const appttsStatus = await Appointments.findAndCountAll({
                where: {
                    status: 'pending'
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
                ], attributes: ['id', 'date', 'status']
            });
            res.status(200).send(appttsStatus)
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },

    appttsDlt: async (req, res) => {
        try {
            const appointment = req.params.id
            await Appointments.update(
                { status: 'canceled' },
                {
                    where: { id: appointment}
                }
            );
            res.status(200).send('Appointment canceled')
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}


