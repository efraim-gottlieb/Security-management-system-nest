
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ unique: true })
  username: string;

  @Column
  password: string;

  @Column({ allowNull: true })
  firstName: string;

  @Column({ allowNull: true })
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
