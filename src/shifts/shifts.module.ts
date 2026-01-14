import { Module } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';
import { Shift } from './shift.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Shift])],
  exports: [SequelizeModule,ShiftsService],
  providers: [ShiftsService],
  controllers: [ShiftsController],
})
export class ShiftsModule {}


