const { Router } = require( 'express');

const UserController = require( './app/controllers/UserController');
const VariableController = require( './app/controllers/VariableController');
const ValuesController = require( './app/controllers/ValuesController');

// importa minhas configuraççoes

const routes = new Router();
routes.post('/users', UserController.store);

routes.post('/variable', VariableController.store);

routes.post('/values', ValuesController.store);

routes.get('/aaa', () => 'Hello leo');

module.exports = routes;
