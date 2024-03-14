import express from 'express';
import cors from 'cors';
import UserController from './app/controllers/UserController.js';
import userRoutes from './app/routes/users.js';
import postRoutes from './app/routes/posts.js';


const app = express();



app.use(express.json());
app.use(cors())

//routes

app.use('/api', userRoutes )
app.use('/api', postRoutes)


export default app