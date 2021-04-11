import { Users } from '../models/users.js';
import jwt from 'jsonwebtoken';


export const checkRole = async (req, res, next) => {
    try {
        const email = jwt.decode(req.headers.authentication);
        console.log(email.email)
        const user = await Users.findOne( { where: { email: email.email }});
        if (user.role !== 'admin') {
        res.status(401).send('User does not have the admin privileges');
    } else {
        next()
    }    
    } catch (e) {
        console.log(e)
    }   
}