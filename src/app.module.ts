/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './school-period/service/school-period.service';

import { BusinessTutorService } from './business-tutor/services/business-tutor.service';
import { BusinessTutorController } from './business-tutor/controllers/business-tutor.controller';

import { BusinessTutorModule } from './business-tutor/business-tutor.module';
import { SchoolPeriodController } from './school-period/controllers/school-period.controller';
import { DualTrainingService } from './dual-training/service/dual-training.service';
import { DualTrainingController } from './dual-training/controller/dual-training.controller';
import { StudentService } from './students/service/student.service';
import { StudentController } from './students/student_controller/student.controller';
import { CompanyService } from './companies/service/company/company.service';
import { CompanyController } from './companies/company_controller/company.controller';
import { LevelController } from './levels/controllers/level.controller';
import { LevelService } from './levels/services/level.service';
import { InstitutionalTutorController } from './institutional-tutors/controllers/institutional_tutor.controller';
import { CareerController } from './carrers_module/career_controller/career.controller';
import { InstitutionalTutorService } from './institutional-tutors/services/institutional-tutor.service';
import { CareerService } from './carrers_module/service/career/career.service';
@Module({
  imports: [BusinessTutorModule],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    BusinessTutorController,
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
    BusinessTutorService,
    DualTrainingService,
    StudentService,
    LevelService,
    CompanyService,
    InstitutionalTutorService,
    CareerService,
  ],
})
export class AppModule {}
