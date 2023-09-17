import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, ConfigService],
})
export class TasksModule {}
