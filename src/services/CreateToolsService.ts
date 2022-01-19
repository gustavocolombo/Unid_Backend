import { getRepository } from 'typeorm';
import Tools from '../models/Tools';

interface ICreateTools{
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export default class CreateToolsService {
  public async execute({
    link, tags, title, description,
  }: ICreateTools): Promise<Tools> {
    const toolsRepository = getRepository(Tools);

    const tools = toolsRepository.create({
      link, tags, title, description,
    });

    await toolsRepository.save(tools);

    return tools;
  }
}
