import { Users } from '../models/user.js';

export const userController = {
    create: async (req, res) => {
        try {
            const newUser = {
                email: req.headers.email,
                userName: req.headers.username,
                password: req.headers.password,
                age: req.headers.age
            }
            await Users.create(newUser)
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}