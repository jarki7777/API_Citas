import { Users } from '../models/user.js';

export const userController = {
    create: async (req, res) => {
        try {
            const newUser = {
                email: req.headers.email,
                name: req.headers.name,
                password: req.headers.password,
                createdAt: req.headers.createdAt,
                updatedAt: req.headers.updatedAt
            }
            await Users.create(newUser)
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}