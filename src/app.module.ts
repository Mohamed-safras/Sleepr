import { Module } from '@nestjs/common';
// import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { configuration } from 'config/configuration';
import { LoggerModule } from 'nestjs-pino';
// import { DatabaseModule } from 'y/common';
import { DatabaseModule } from 'y/common';
import { validationSchema } from '../config/validation';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    LoggerModule.forRoot({}),
    TasksModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: `${process.cwd()}/config/env/.env.${process.env.NODE_ENV}`,
      validationSchema,
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
