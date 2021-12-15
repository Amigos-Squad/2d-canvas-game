import {
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Default,
} from 'sequelize-typescript';

@Table
export class Topic extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  posts!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  author!: number;

  @Default(false)
  @Column(DataType.BOOLEAN)
  isLocked!: boolean;
}
