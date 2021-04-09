import { Users, Doctors, Appointments } from '../models/index.js'

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
        const user = req.body.email
        try {
            const dashboard = await Users.findOne({
                where: { email: user },
                include: [
                    {
                        model: Appointments
                    }
                ]
            });
            res.status(200).send(dashboard)
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}