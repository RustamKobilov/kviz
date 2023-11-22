import { QuestionsRepository } from './questionsRepository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class QuestionsService {
  constructor(private readonly questionsRepository: QuestionsRepository) {}
}
