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
import { BusinessTutorsService } from 'src/services/business-tutors/business-tutors.service';
import { CreateBusinessTutorDto } from 'src/dtos/business-tutors.dtos';
import { UpdateBusinessTutorDto } from 'src/dtos/business-tutors.dtos';


@Controller('business-tutors')
export class BusinessTutorsController {
    constructor(private businessTutorsService: BusinessTutorsService) {}
  /**RUTAS  NO DINAMICAS */

    @Get('filter') 
    getBusinessTutorFilter() {
      return `Hola mundo `;
    }
      /**RUTAS   DINAMICAS */
    @Get(':businessTutorId') 
    getBusinessTutor(@Param(`businessTutorId`, ParseIntPipe) businessTutorId: number) {
      return this.businessTutorsService.findOne(businessTutorId);
    }

    @Get('') 
    getBusinessTutors(
      @Query(`limit`) limit = 10,
      @Query(`offset`) offset = 0,
      @Query(`brand`) brand: string,
    ) {
  
      return this.businessTutorsService.findAll();
    }

      //crear*******************
  @Post()
  create(@Body() payload: CreateBusinessTutorDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.businessTutorsService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateBusinessTutorDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.businessTutorsService.update(id, payload);
  }
  /***DELETE */
  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.businessTutorsService.delete(+id);
  }



  
  
  
}
