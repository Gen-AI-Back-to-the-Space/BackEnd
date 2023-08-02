import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { swaggerSetUp } from './config/swagger/init.swagger';
import { nestiaSwaggerSetUp } from './config/swagger/nestia.swagger-init';
import { PrismaService } from './config/database/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const port = await configService.get('NEST_PORT');

  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  swaggerSetUp(app);
  nestiaSwaggerSetUp(app);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://fastapi_server:80'],
  });

  await app.listen(port);
}
bootstrap();
