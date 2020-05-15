import { Router } from 'express';

import UserController from './app/controllers/UserController';
import VariableController from './app/controllers/VariableController';
import ValuesController from "./app/controllers/ValuesController";

// importa minhas configuraççoes

const routes = new Router();
routes.post('/users', UserController.store);

routes.post('/variable', VariableController.store);

routes.post('/values', ValuesController.store)

export default routes;
