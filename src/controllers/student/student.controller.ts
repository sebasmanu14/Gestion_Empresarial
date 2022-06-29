/* eslint-disable prettier/prettier */
import {
  Controller,
  Param,
  Query,
  Get,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateStudentdDto } from 'src/dtos/student.dtos';
import { UpdateStudentDto } from 'src/dtos/student.dtos';
import { StudentService } from 'src/services/student/student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('filter') //@Get('schoolPeriod/filter')
  getStudentFilter() {
    return `Hola World `;
  }

  @Get(':studentId') //@Get('getStudentgetStudent/:studentId')
  getStudent(@Param(`studentId`, ParseIntPipe) studentId: number) {
    // return `product ${studentId}`;
    return this.studentService.findOne(studentId);
  }

  @Get('') //    @Get('products')
  getStudents(
    // @Query(`limit`) limit: number =10,
    @Query(`limit`) limit = 10,
    @Query(`offset`) offset = 0,
    @Query(`brand`) brand: string,
  ) {
    // const{limit,offset}=params;){
    // return `products:=>${limit} offset=${offset}`;
    // return `products limit=>${limit} offset=${offset} brand=>${brand}`
    // return {
    //     message: `products limit=>${limit} offset=${offset} brand=>${brand}`
    // }

    return this.studentService.findAll();
  }

  @Post()
  create(@Body() payload: CreateStudentdDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.studentService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateStudentDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.studentService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.studentService.delete(+id);
  }
}
