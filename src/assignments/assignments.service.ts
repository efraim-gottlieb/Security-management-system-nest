import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Assignment } from './assignment.model';


@Injectable()
export class AssignmentsService {
  constructor(
    @InjectModel(Assignment)
    private assignmentsModel: typeof Assignment,
  ) { }
  create(assignmentData: CreateAssignmentDto) {
    return this.assignmentsModel.create({...assignmentData})
  }

  findAll() {
    return this.assignmentsModel.findAll(
      { include: ['user', 'shift'] }
    )
  }

  getById(id: number) {
    return this.assignmentsModel.findAll({ where: { userId: id }, raw: true })
  }

  update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
