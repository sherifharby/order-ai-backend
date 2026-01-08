/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  async create(username: string, password: string, role = 'REVIEWER') {
    const hash = await bcrypt.hash(password, 10);
    return this.userModel.create({
      username,
      password: hash,
      role,
    });
  }
}
