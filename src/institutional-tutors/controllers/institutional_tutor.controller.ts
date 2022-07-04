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
  import { CreateInstitutionalTutorDto, UpdateInstitutionalTutorDto } from 'src/institutional-tutors/dtos/institutional-tutor.dtos';
  import { InstitutionalTutorService } from 'src/institutional-tutors/services/institutional-tutor.service';

@Controller('institutionalTutors')
export class InstitutionalTutorController {
    constructor(private institutionalTutorService: InstitutionalTutorService) {}

  @Get('filter') //@Get('level/filter')
  getInstitutionalTutorFilter() {
    return `He Word `;
  }

  @Get(':institutionalTutorId') //@Get('level/:levelId')
  getInstitutionalTutor(
    @Param(`institutionalTutorId`, ParseIntPipe) institutionalTutorId: number,
  ) {
    // return `product ${institutionalTutorId}`;
    return this.institutionalTutorService.findOne(institutionalTutorId);
  }

  @Get('') //    @Get('levels')
  getLevels(
    // @Query(`limit`) limit: number =10,
    @Query(`limit`) limit = 10,
    @Query(`offset`) offset = 0,
    @Query(`brand`) brand: string,
  ) {
    // const{limit,offset}=params;){
    // return `levels:=>${limit} offset=${offset}`;
    // return `levels limit=>${limit} offset=${offset} brand=>${brand}`
    // return {
    //     message: `levels limit=>${limit} offset=${offset} brand=>${brand}`
    // }

    return this.institutionalTutorService.findAll();
  }

  @Post()
  create(@Body() payload: CreateInstitutionalTutorDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.institutionalTutorService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateInstitutionalTutorDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.institutionalTutorService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.institutionalTutorService.delete(+id);
  }
}
