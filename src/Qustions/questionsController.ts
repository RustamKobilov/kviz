import { QuestionsService } from './questionsService';
import { Controller, Injectable } from '@nestjs/common';
@Injectable()
@Controller('sa/quiz')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}
}
