import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'shifts' })
export class Shift extends Model {

  @Column({ allowNull: false })
  startTime: string;

  @Column({ allowNull: false })
  endTime: string;

  @Column({ allowNull: false })
  location: string;
}
