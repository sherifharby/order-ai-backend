/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private role: 'ADMIN') {}

  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    return req.user?.role === this.role;
  }
}
