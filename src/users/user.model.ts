import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Assignment } from 'src/assignments/assignment.model';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column
  username: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: false })
  role: string;

  @HasMany(() => Assignment)
  assignment: Assignment[]
}
