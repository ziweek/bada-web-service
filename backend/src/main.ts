import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as winstonDaily from 'winston-daily-rotate-file';
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';

const basicAuth = require('express-basic-auth');

async function bootstrap() {
  const dailyOptions = (level: string) => {
    return {
      level,
      datePattern: 'YYYY-MM-DD',
      dirname: 'logs' + `/${level}`,
      filename: `%DATE%.${level}.log`,
      maxFiles: 30, //30일치 로그파일 저장
      zippedArchive: true, // 로그가 쌓이면 압축하여 관리
    };
  };

  // LOGGER SETTING
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'http' : 'silly',
          // production 환경이라면 http, 개발환경이라면 모든 단계를 로그
          format:
            process.env.NODE_ENV === 'production'
              ? // production 환경은 자원을 아끼기 위해 simple 포맷 사용
                winston.format.simple()
              : winston.format.combine(
                  winston.format.timestamp(),
                  utilities.format.nestLike('kuMap', {
                    colors: true,
                    prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
                  }),
                ),
        }),

        // info, warn, error 로그는 파일로 관리
        new winstonDaily(dailyOptions('info')),
        new winstonDaily(dailyOptions('warn')),
        new winstonDaily(dailyOptions('error')),
      ],
    }),
  });

  // Validation Setting
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // ENABLE CORS
  app.enableCors();

  // LOCKING SWAGGER
  app.use(
    ['/docs'],
    basicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USERNAME]: process.env.SWAGGER_PASSWORD,
      },
    }),
  );

  // SWAGEGR SETTING
  const config = new DocumentBuilder()
    .setTitle('bada backend Docs')
    .setDescription('bada backend API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // PORT SETTING
  await app.listen(5000);
}
bootstrap();
