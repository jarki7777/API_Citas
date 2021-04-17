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
            const dashboard = await Users.findAndCountAll({
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
    }
}