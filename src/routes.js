import { Router } from 'express';
import CompanyController from './app/controllers/CompanyController';
import SchoolController from './app/controllers/SchoolController';
import StudentsController from './app/controllers/StudentsController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/students', StudentsController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);

routes.get('/companies', CompanyController.index);
routes.post('/companies', CompanyController.store);

routes.post('/schools', SchoolController.store);

export default routes;
