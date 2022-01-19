import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Users from '../models/Users';

interface ICreateUser{
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService{
  public async execute({ name, email, password }: ICreateUser): Promise<Users>{
    const userRepository = getRepository(Users);

    const hashedPass = await hash(password, 8);

    const user = userRepository.create({ name, email, password: hashedPass });

    await userRepository.save(user);

    return user;
  }
}
