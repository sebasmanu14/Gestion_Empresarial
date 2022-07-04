import {
  Controller,
  Param,
  Query,
  Get,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateDualTrainingDto } from 'src/dual-training/dtos/dualTrainings.dtos';
import { UpdateDualTrainingDto } from 'src/dual-training/dtos/dualTrainings.dtos';
import { DualTrainingService } from '../service/dual-training.service';

@Controller('dualTraining')
export class DualTrainingController {
  constructor(private dualTrainingService: DualTrainingService) {}

  @Get('filter') //@Get('dualTraining/filter')
  getDualTrainingFilter() {
    return `Hola Word `;
  }

  @Get(':dualTrainingId') //@Get('dualTraining/:dualTrainingId')
  getDualTraining(
    @Param(`dualTrainingId`, ParseIntPipe) dualTrainingId: number,
  ) {
    // return `product ${schoolPeriodId}`;
    return this.dualTrainingService.findOne(dualTrainingId);
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

    return this.dualTrainingService.findAll();
  }

  @Post()
  create(@Body() payload: CreateDualTrainingDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.dualTrainingService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateDualTrainingDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.dualTrainingService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.dualTrainingService.delete(+id);
  }
}
