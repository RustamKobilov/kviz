import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './Entitys/QuestionEntity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsRepository {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepositoryTypeOrm: Repository<QuestionEntity>,
  ) {}
}
