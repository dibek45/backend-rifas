import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Archivos estáticos (por ejemplo, imágenes)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // WebSocket Adapter (si usas sockets)
  app.useWebSocketAdapter(new IoAdapter(app));

  // Límite de body grande (por si subes imágenes o base64)
  app.use(bodyParser.json({ limit: '50mb' }));

  // Lista de dominios permitidos (CORS)
  const whitelist = [
    'http://localhost:3000',
    'http://localhost:4200',
    'http://localhost:4201',
    'http://localhost:4202',
    'http://127.0.0.1:4200',
    'capacitor://localhost',
    'https://sorteos.sa.dibeksolutions.com',
    'https://sorteos.sa.admin.dibeksolutions.com',
    'https://sorteos.sa.admin.dibeksolutions.com/login',
    'https://studio.apollographql.com',
    'https://sandbox.embed.apollographql.com',
        'http://192.168.1.75:3000',
    'http://192.168.1.75:8080',
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`❌ Blocked by CORS: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Validaciones DTO automáticas
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3000, '0.0.0.0');
  console.log(`🚀 Sorteos backend running at http://localhost:3000`);
}

bootstrap();
