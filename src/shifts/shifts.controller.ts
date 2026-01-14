import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
// import { CreateShiftDto } from './dto/create-shift.dto';
// import { UpdateShiftDto } from './dto/update-shift.dto';
import { Roles } from 'src/auth/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/enums/role.enum';

@Roles(Role.Commander)
@UseGuards(AuthGuard, RolesGuard)
@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) { }

  @Post()
  async create(@Body() createShiftDto: {startTime: string, endTime: string, location: string}) {
    return await this.shiftsService.create(createShiftDto);
  }

  @Get()
  findAll() {
    return this.shiftsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shiftsService.findOne(+id);
  }

  // @Patch(':id')
  // // update(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto) {
  // //   return this.shiftsService.update(+id, updateShiftDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shiftsService.remove(+id);
  }
}


