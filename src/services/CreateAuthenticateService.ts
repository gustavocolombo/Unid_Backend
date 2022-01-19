import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import authconfig from '../auth/authconfig';
import Users from '../models/Users';

interface IResponse{
  user: Users;
  token: string
}

export default class CreateAuthenticateService{
  public async execute(email: string, password: string): Promise<IResponse>{
    const userRepository = getRepository(Users);

    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user){
      throw new Error('Erro nas credenciais, email/senha inválidos');
    }

    const comparePassword = compare(password, user.password);

    if (!comparePassword){
      throw new Error('Erro nas credenciais, email/senha inválidos');
    }

    const token = sign(
      {
        user: {
          id: user.id,
          name: user.name,
        },
      },
      authconfig.jwt,
      {
        subject: user.id,
        expiresIn: authconfig.expiresIn,
      },
    );

    return { user, token };
  }
}
