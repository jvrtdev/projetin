import express from 'express';
import cors from 'cors';
import UserController from './app/controllers/UserController.js';

const app = express();



app.use(express.json());
app.use(cors())

app.get('/user', UserController.index)

app.get('/user/:email', UserController.show)

app.post('/user', UserController.store)

app.post('/login', UserController.login)

app.put('/user/:email', UserController.update)

app.delete('user/:email', UserController.delete)

export default app