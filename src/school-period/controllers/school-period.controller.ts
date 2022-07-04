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
import { CreateSchoolPeriodDto } from 'src/school-period/dtos/school-periods.dtos';
import { UpdateSchoolPeriodDto } from 'src/school-period/dtos/school-periods.dtos';
import { SchoolPeriodService } from '../service/school-period.service';

@Controller('schoolPeriods')
export class SchoolPeriodController {
  constructor(private schoolPeriodService: SchoolPeriodService) {}

  @Get('filter') //@Get('schoolPeriod/filter')
  getSchoolPeriodFilter() {
    return `Hola Word `;
  }

  @Get(':schoolPeriodId') //@Get('schoolPeriod/:schoolPeriodId')
  getSchoolPeriod(
    @Param(`schoolPeriodId`, ParseIntPipe) schoolPeriodId: number,
  ) {
    // return `product ${schoolPeriodId}`;
    return this.schoolPeriodService.findOne(schoolPeriodId);
  }

  @Get('') //    @Get('products')
  getSchoolPeriods(
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

    return this.schoolPeriodService.findAll();
  }

  @Post()
  create(@Body() payload: CreateSchoolPeriodDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.schoolPeriodService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateSchoolPeriodDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.schoolPeriodService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.schoolPeriodService.delete(+id);
  }
}
