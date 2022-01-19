import { getRepository } from 'typeorm';
import Tools from '../models/Tools';

export default class GetAllToolsService {
  public async execute(): Promise<Tools[]> {
    const allTools = getRepository(Tools);

    const tools = await allTools.find();

    if (tools === []) {
      throw new Error('Não há nenhuma ferramenta a ser exibida, cadastre uma antes');
    }

    return tools;
  }
}
