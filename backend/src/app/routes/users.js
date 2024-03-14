import express from 'express'
import UserController from '../controllers/UserController.js';
const userRoutes = express.Router();

userRoutes.get('/user', UserController.index)

userRoutes.get('/user/:email', UserController.show)

userRoutes.post('/user', UserController.store)

userRoutes.post('/login', await UserController.login)

userRoutes.put('/user/:email', UserController.update)

userRoutes.delete('user/:email', UserController.delete)

export default userRoutes
