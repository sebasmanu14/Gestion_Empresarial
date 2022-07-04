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
import { CreateCareerdDto } from 'src/carrers_module/dtos/career.dtos';
import { UpdateCareerDto } from 'src/carrers_module/dtos/career.dtos';
import { CareerService } from 'src/carrers_module/service/career/career.service';

@Controller('career')
export class CareerController {
  constructor(private careerService: CareerService) {}

  @Get('filter') //@Get('schoolPeriod/filter')
  getStudentFilter() {
    return `Hola World `;
  }

  @Get(':careertId') //@Get('getStudentgetStudent/:careertId')
  getCareer(@Param(`careertId`, ParseIntPipe) careertId: number) {
    // return `product ${careertId}`;
    return this.careerService.findOne(careertId);
  }

  @Get('') //    @Get('products')
  getCareers(
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

    return this.careerService.findAll();
  }

  @Post()
  create(@Body() payload: CreateCareerdDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.careerService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCareerDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.careerService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.careerService.delete(+id);
  }
}
