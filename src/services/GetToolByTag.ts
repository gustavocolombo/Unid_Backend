import { getCustomRepository } from 'typeorm';
import ToolsRepositories from '../repositories/ToolsRepositories';

export default class GetToolByTag{
  public async execute(tag: string): Promise<any>{
    const toolsRepository = getCustomRepository(ToolsRepositories);

    const findByTag = await toolsRepository.findByTag(tag);

    return findByTag;
  }
}
