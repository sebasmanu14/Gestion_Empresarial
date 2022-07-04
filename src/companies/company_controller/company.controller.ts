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
import { CompanyService } from 'src/companies/service/company/company.service';
import { CreateCompanyDto } from 'src/companies/dtos/company.dtos';
import { UpdateCompanyDto } from 'src/companies/dtos/company.dtos';
@Controller('Company')
export class CompanyController {
  constructor(private companysService: CompanyService) {}

  /**RUTAS  NO DINAMICAS */
  @Get('filter') //@Get('products/filter')
  getCompanyFilter() {
    return `Hola WORD `;
  }

  /**RUTAS   DINAMICAS */
  @Get(':companyId') //@Get('products/:productId')
  getCompany(@Param(`companyId`, ParseIntPipe) companyId: number) {
    // return `product ${productId}`;
    return this.companysService.findOne(companyId);
  }

  @Get('') //    @Get('products')
  getCompanys(
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

    return this.companysService.findAll();
  }

  //crear*******************
  @Post()
  create(@Body() payload: CreateCompanyDto) {
    // return {
    //     message:'accion de crear',
    //     payload,
    // }
    return this.companysService.create(payload);
  }

  //************* update******************
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCompanyDto) {
    // return {
    //     id,
    //     payload,
    // }
    return this.companysService.update(id, payload);
  }
  /***DELETE */
  @Delete(':id')
  delete(@Param('id') id: number) {
    // return id;
    return this.companysService.delete(+id);
  }
}
