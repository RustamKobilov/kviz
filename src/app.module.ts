import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QuestionEntity } from './Qustions/Entitys/QuestionEntity';
import { QuestionsController } from './Qustions/questionsController';
import { QuestionsService } from './Qustions/questionsService';
import { QuestionsRepository } from './Qustions/questionsRepository';
const sqlEntity = [QuestionEntity];
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => {
        return {
          type: 'postgres',
          url: config.get('SQL_URL') as string,
          synchronize: true,
          autoLoadEntities: true,
          ssl: true,
        } as TypeOrmModuleOptions;
      },
    }),
    TypeOrmModule.forFeature(sqlEntity),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService, QuestionsRepository],
})
export class AppModule {}
