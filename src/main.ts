/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true}))
<<<<<<< HEAD
  await app.listen(3002);
=======
  await app.listen(3000);
>>>>>>> bd54176aa2aee91a9d537fe5bb523a327e38413a
}
bootstrap();
