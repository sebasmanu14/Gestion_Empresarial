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
import { CreateBusinessTutordDto } from 'src/business-tutor/dtos/business-tutor.dtos';
import { UpdateBusinessTutorDto } from 'src/business-tutor/dtos/business-tutor.dtos';
import { BusinessTutorService } from 'src/business-tutor/services/business-tutor.service';


@Controller('business-tutor')
export class BusinessTutorController {
  constructor(private businessTutorService: BusinessTutorService) { }
  /**RUTAS  NO DINAMICAS */

  @Get('filter')
  getBusinessTutorFilter() {
    return `Hola mundo `;
  }
  /**RUTAS   DINAMICAS */
  @Get(':businessTutorId')
  getBusinessTutor(@Param(`businessTutorId`, ParseIntPipe) businessTutorId: number) {
    return this.businessTutorService.findOne(businessTutorId);
  }

  @Get('')
  getBusinessTutors(
    @Query(`limit`) limit = 10,
    @Query(`offset`) offset = 0,
    @Query(`brand`) brand: string,
  ) {

    return this.businessTutorService.findAll();
  }

  //crear*******************
  @Post()
  create(@Body() payload: CreateBusinessTutordDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.businessTutorService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateBusinessTutorDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.businessTutorService.update(id, payload);
  }
  /***DELETE */
  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.businessTutorService.delete(+id);
  }






}
