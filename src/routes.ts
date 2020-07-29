import { Router } from 'express';


import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);

export default routes;