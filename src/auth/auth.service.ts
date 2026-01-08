/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private jwt: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.users.findByUsername(username);
    if (!user) throw new UnauthorizedException();

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new UnauthorizedException();

    return {
      access_token: this.jwt.sign({
        sub: user._id,
        role: user.role,
      }),
    };
  }
}
