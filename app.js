import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', authRoutes)

app.use('/users', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});