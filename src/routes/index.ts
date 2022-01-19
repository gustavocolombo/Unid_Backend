import { Router } from 'express';
import sessionRoutes from './session.routes';
import toolsRoutes from './tools.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/tools', toolsRoutes);
routes.use('/users', usersRouter);
routes.use('/session', sessionRoutes);

export default routes;
