/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';
import { BusinessTutorsService } from './services/business-tutors/business-tutors.service';
import { BusinessTutorsController } from './controllers/business-tutor/business-tutors.controller';
import { DualTrainingService } from './services/dual-training/dual-training.service';
import { DualTrainingController } from './controllers/dual-training/dual-training.controller';
import { StudentService } from './students/service/student.service';
import { StudentController } from './students/student_controller/student.controller';

import { LevelController } from './controllers/level/level.controller';
import { LevelService } from './services/level/level.service';
import { InstitutionalTutorController } from './controllers/institutional-tutor/institutional_tutor.controller';
import { InstitutionalTutorService } from './services/institutional-tutor/institutional-tutor.service';
import { CareerService } from './carrers_module/service/career/career.service';
import { CareerController } from './carrers_module/career_controller/career.controller';
import { StudentsModule } from './students/students.module';
import { CompanyService } from './companies/service/company/company.service';
import { CompanyController } from './companies/company_controller/company.controller';
import { CarrersModuleModule } from './carrers_module/carrers_module.module';

import { CompaniesModule } from './companies/companies.module';
@Module({
  imports: [
    StudentsModule,
    CarrersModuleModule,
    CarrersModuleModule,
    CompaniesModule,
    CompaniesModule,
  ],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    BusinessTutorsController,
    DualTrainingController,
    StudentController,
    CompanyController,
    InstitutionalTutorController,
    LevelController,
    CareerController,
  ],
  providers: [
    AppService,
    ProductsService,
    SchoolPeriodService,
    BusinessTutorsService,
    DualTrainingService,
    StudentService,
    LevelService,
    CompanyService,
    InstitutionalTutorService,
    CareerService,
  ],
})
export class AppModule {}
