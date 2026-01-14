import { Injectable } from '@nestjs/common';
// import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './shift.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ShiftsService {
  constructor(
      @InjectModel(Shift)
      private shiftModel: typeof Shift,
    ) { }
  async create(shiftData: {startTime: string, endTime: string, location: string}) {
    return this.shiftModel.create(shiftData)
  }

  findAll() {
    return `This action returns all shifts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shift`;
  }

  // update(id: number, updateShiftDto: UpdateShiftDto) {
  //   return `This action updates a #${id} shift`;
  // }

  remove(id: number) {
    return `This action removes a #${id} shift`;
  }
}
