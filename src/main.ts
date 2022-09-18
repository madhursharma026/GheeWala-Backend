import { join } from 'path';
import * as express from 'express';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/public', express.static(join(__dirname, '..', 'CategoryImages')));
  app.use('/public', express.static(join(__dirname, '..', 'ProductImages')));
  await app.listen(3000);
}
bootstrap();

