import {
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { Topic } from '.';

@Table
export class Post extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  message!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  author!: string;

  @AllowNull(false)
  @ForeignKey(() => Topic)
  @Column(DataType.INTEGER)
  topicId!: number;
}
