import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(AuthGuard)
@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) { }

  @Roles(Role.Commander)
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  create(@Body() assignmentData: CreateAssignmentDto) {
    return this.assignmentsService.create(assignmentData);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.assignmentsService.findAll();
  }

  @Get('my')
  findOne(@Req() req) {
    const id = req.user.sub
    return this.assignmentsService.getById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignmentDto: UpdateAssignmentDto) {
    return this.assignmentsService.update(+id, updateAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentsService.remove(+id);
  }
}
