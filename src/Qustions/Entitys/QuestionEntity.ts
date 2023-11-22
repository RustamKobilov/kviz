import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class QuestionEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column({ type: 'string' })
  body: string;
  @Column({
    array: true,
    nullable: false,
  })
  correctAnswers: string[];
  @Column({ type: 'boolean' })
  published: false;
  @Column({ type: 'string' })
  createdAt: string;
  @Column({ type: 'string' })
  updatedAt: string;
}
