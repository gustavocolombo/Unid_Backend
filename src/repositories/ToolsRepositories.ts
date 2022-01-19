import { EntityRepository, Repository } from 'typeorm';
import Tools from '../models/Tools';

@EntityRepository(Tools)
export default class ToolsRepository extends Repository<Tools> {
  public async findByTag(tag: string): Promise<any> {
    const tools = await this.find();

    const findTag = tools.filter((tool) => tool.tags.includes(tag));

    return findTag;
  }
}
