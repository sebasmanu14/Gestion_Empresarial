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
import { StudentService } from './services/student/student.service';
import { StudentController } from './controllers/student/student.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    CompanyController,
    StudentController,
  ],
  providers: [AppService, ProductsService, SchoolPeriodService,CompanyService,StudentService],

})
export class AppModule {}
