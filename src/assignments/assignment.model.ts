import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { Shift } from 'src/shifts/shift.model';

@Table({tableName: 'assignments'})
export class Assignment extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Shift)
  @Column
  shiftId: number;

  @BelongsTo(() => Shift)
  shift: Shift;
}
