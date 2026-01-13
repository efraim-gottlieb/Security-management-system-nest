
import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ unique: true })
  username: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column({ allowNull: false})
  role: string
}