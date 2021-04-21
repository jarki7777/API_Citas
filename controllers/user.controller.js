import { Users, Appointments, Doctors } from '../models/index.js';
import jwt from 'jsonwebtoken';

export const userController = {
    create: async (req, res) => {
        try {
            const newUser = {
                email: req.headers.email,
                name: req.headers.name,
                password: req.headers.password,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
            await Users.create(newUser)
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    dashboard: async (req, res) => {
        const user = jwt.decode(req.headers.authentication);
        try {
            const dashboard = await Users.findOne({
                where: { id: user.id },
                include: [
                    {
                        model: Appointments,
                        attributes: ['id', 'date', 'status'],
                        include: [
                            {
                                model: Doctors,
                                attributes: ['name', 'speciality']
                            }
                        ]
                    }
                ],
                attributes: ['email', 'name']
            });
            res.status(200).send(dashboard)
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    userList: async (req, res) => {
        try {
            const list = await Users.findAll({
                attributes: ['id', 'email', 'name']
            });

            res.status(200).send({ "client" : list})
            
        } catch(e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    doctorList: async (req, res) => {
        try {
            console.log(req.body.name)
            const list = await Doctors.findAll({
                attributes: ['id', 'name', 'speciality']
            });

            res.status(200).send({ "doctors" : list})
            
        } catch(e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}