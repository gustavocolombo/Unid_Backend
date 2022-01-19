import { getRepository } from 'typeorm';
import Tools from '../models/Tools';

export default class DelelteToolService{
  public async execute(id: string): Promise<any>{
    try {
      const toolsRepository = getRepository(Tools);

      const deleteTool = await toolsRepository.delete(id);

      if (deleteTool.affected === 1){
        return { message: 'Ferramenta deletada com sucesso' };
      }
      return 0;
    } catch {
      throw new Error('Não foi possível executar a operação');
    }
  }
}
