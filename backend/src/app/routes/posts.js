import express from 'express';
import PostController from '../controllers/PostController.js';
const postRoutes = express.Router();

postRoutes.get('/posts', PostController.index)
postRoutes.get('/posts/:email', PostController.show)
postRoutes.post('/posts', PostController.store)

export default postRoutes
