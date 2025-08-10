import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 📂 Ruta correcta al build de Angular
  const clientPath = join(__dirname, '..', '..', 'dist', 'nombre-de-tu-app'); // <-- cambia 'nombre-de-tu-app' por el real
  app.use(express.static(clientPath));

  // 📂 Archivos estáticos (ej. imágenes)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // WebSocket Adapter
  app.useWebSocketAdapter(new IoAdapter(app));

  // Límite de body grande
  app.use(bodyParser.json({ limit: '50mb' }));

  // 🌍 Lista de dominios permitidos
  const whitelist = [
    'http://localhost:3000',
    'http://localhost:4200',
    'capacitor://localhost',
    'http://192.168.1.75:3000',
    'http://192.168.1.75:8080',
    'https://sorteos.sa.dibeksolutions.com',
    'https://sorteos.sa.admin.dibeksolutions.com',
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

  // 📌 Catch-all para SPA Angular
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.get(/^\/(?!api|uploads).*/, (req: Request, res: Response) => {
    res.sendFile(join(clientPath, 'index.html'));
  });

  await app.listen(3000, '0.0.0.0');
  console.log(`🚀 Sorteos backend running at http://localhost:3000`);
}

bootstrap();
