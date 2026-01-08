import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const users = app.get(UsersService);

  const admin = await users.findByUsername('admin');
  if (!admin) {
    await users.create('admin', 'admin123', 'ADMIN');
    console.log('Admin user created');
  } else {
    console.log('Admin already exists');
  }

  await app.close();
}
void bootstrap();
