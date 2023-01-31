import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminModule } from '@adminjs/nestjs';
import adminjs from 'adminjs';
import * as AdminJSTypeorm from '@adminjs/typeorm';
import { ProfilesModule } from './modules/models/profiles/profiles.module';
import { ProjectsModule } from './modules/models/projects/projects.module';
import { AuthModule } from './modules/functions/auth/auth.module';
import { UploaderModule } from './modules/functions/uploader/uploader.module';
import { EventsModule } from './modules/models/events/events.module';
import { Profile } from './modules/models/profiles/entities/profile.entity';
import { Project } from './modules/models/projects/entities/project.entity';
import { Event } from './modules/models/events/entities/event.entity';
import { ActivitiesModule } from './modules/models/activities/activities.module';

const DEFAULT_ADMIN = {
  email: process.env.DEFAULT_ADMIN_EMAIL,
  password: process.env.DEFAULT_ADMIN_PASSWORD,
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

adminjs.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
});

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal: true,
    }),

    // TypeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          //
          host: config.get<string>('MYSQL_HOST'),
          port: config.get<number>('MYSQL_PORT'),
          //
          username: config.get<string>('MYSQL_USERNAME'),
          password: config.get<string>('MYSQL_PASSWORD'),
          database: config.get<string>('MYSQL_DBNAME'),
          //
          entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
          //
          timezone: '+09:00',
          logging: true,
          synchronize: true,
        };
      },
    }),

    // AdminJS Setting
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [Event, Profile, Project],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret',
        },
      }),
    }),

    // Others
    ProfilesModule,
    ProjectsModule,
    AuthModule,
    UploaderModule,
    EventsModule,
    ActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
