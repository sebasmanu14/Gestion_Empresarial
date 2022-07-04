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
import { CreateLevelDto } from 'src/dtos/level.dtos';
import { UpdateLevelDto } from 'src/dtos/level.dtos';
import { LevelService } from 'src/services/level/level.service';

@Controller('level')
export class LevelController {
  constructor(private levelService: LevelService) {}

  @Get('filter') //@Get('level/filter')
  getLevelFilter() {
    return `He Word `;
  }

  @Get(':levelId') //@Get('level/:levelId')
  getLevel(@Param(`levelId`, ParseIntPipe) levelId: number) {
    // return `product ${levelId}`;
    return this.levelService.findOne(levelId);
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

    return this.levelService.findAll();
  }

  @Post()
  create(@Body() payload: CreateLevelDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.levelService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateLevelDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.levelService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.levelService.delete(+id);
  }
}
