import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';
import { CompanyController } from './controllers/company/company.controller';
import { CompanyService } from './services/company/company.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    CompanyController,
  ],
  providers: [AppService, ProductsService, SchoolPeriodService,CompanyService],
})
export class AppModule {}
