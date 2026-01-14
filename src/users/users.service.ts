
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({ where: { username } });
  }

  async create(userData: { username: string; password: string; role: string; email: string }): Promise<User> {
    return this.userModel.create(userData as any);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async update(id: number, userData: Partial<User>): Promise<[number, User[]]> {
    return this.userModel.update(userData, { where: { id }, returning: true });
  }

  async remove(id: number): Promise<number> {
    return this.userModel.destroy({ where: { id } });
  }
}