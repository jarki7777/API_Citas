import jwt from 'jsonwebtoken';
import { Users } from '../models/users.js';

export const authController = {
    authenticate: async (req, res) => {
        try {
            const data = {
                email: req.headers.email,
                password: req.headers.password
            }
            const checkUser = await Users.findOne( { where: { email: data.email }});
            if (checkUser && checkUser.email === data.email && checkUser.password === data.password) {                
                const jwtPayload = {
                    email: req.headers.email,
                    id: checkUser.id,
                    role: checkUser.role
                }                
                const token = jwt.sign(jwtPayload, process.env.SECRET);
                res.status(200).json({ token, id: checkUser.id, role: checkUser.role});
                // The response shouldn't include the role, only the payload, but for the case we're returning also the role
            } else {
                res.status(404).send({ message: 'the email-password combination does not exist'});
            }
        } catch (e) {
            console.log(e)
            if (e.reason.message) {
                res.status(400).send({ message: e.reason.message });
            } else {
                res.status(500).send({ message: e.message });
            }
        }
    },
    logout: async (req, res) => {
        res.sendStatus(200);
    }
};