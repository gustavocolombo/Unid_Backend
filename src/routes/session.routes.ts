import { Router } from 'express';
import CreateAuthenticateService from '../services/CreateAuthenticateService';

const sessionRoutes = Router();

sessionRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const service = new CreateAuthenticateService();

  const newSession = await service.execute(email, password);

  return response.json(newSession);
});

export default sessionRoutes;
