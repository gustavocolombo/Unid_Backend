import { Router } from 'express';
import CreateToolsService from '../services/CreateToolsService';
import DelelteToolService from '../services/DeleteToolService';
import GetAllToolsService from '../services/GetAllToolsService';
import GetToolByTag from '../services/GetToolByTag';

const toolsRoutes = Router();

toolsRoutes.post('/', async (request, response) => {
  const {
    title, link, tags = [], description,
  } = request.body;

  const service = new CreateToolsService();

  const newTool = await service.execute({
    title, link, tags, description,
  });

  return response.json(newTool);
});

toolsRoutes.get('/', async (request, response) => {
  const service = new GetAllToolsService();

  const allTools = await service.execute();

  return response.json(allTools);
});

toolsRoutes.get('/:tag', async (request, response) => {
  const { tag } = request.params;

  const service = new GetToolByTag();

  const findByTag = await service.execute(tag);

  return response.json(findByTag);
});

toolsRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const service = new DelelteToolService();

  try {
    const deleteService = await service.execute(id);

    return response.json({ message: 'Ferramenta deletada com sucesso' });
  } catch {
    throw new Error('Não foi possível deletar a ferramenta');
  }
});

export default toolsRoutes;
