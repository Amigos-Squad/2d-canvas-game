import {
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class Post extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  message!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  author!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  topicId!: number;
}
