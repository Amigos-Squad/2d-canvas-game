import {
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  avatar!: string;

  @Column(DataType.STRING)
  theme!: string;
}
