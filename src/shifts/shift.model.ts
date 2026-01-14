import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Assignment } from 'src/assignments/assignment.model';

@Table({ tableName: 'shifts' })
export class Shift extends Model {

  @Column({ allowNull: false })
  startTime: string;

  @Column({ allowNull: false })
  endTime: string;

  @Column({ allowNull: false })
  location: string;

  @HasMany(() => Assignment)
  assignment: Assignment[];
}
