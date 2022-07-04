/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from 'src/school-period/service/school-period.service';
import { SchoolPeriodController } from './school-period/controllers/school-period.controller';
import { BusinessTutorsService } from './services/business-tutors/business-tutors.service';
import { BusinessTutorsController } from './controllers/business-tutor/business-tutors.controller';
import { DualTrainingService } from 'src/dual-training/service/dual-training.service';
import { DualTrainingController } from './dual-training/controller/dual-training.controller';
import { StudentService } from './services/student/student.service';
import { StudentController } from './controllers/student/student.controller';
import { CompanyService } from './services/company/company.service';
import { CompanyController } from './controllers/company/company.controller';
import { LevelController } from './controllers/level/level.controller';
import { LevelService } from './services/level/level.service';
import { InstitutionalTutorController } from './controllers/institutional-tutor/institutional_tutor.controller';
import { InstitutionalTutorService } from './services/institutional-tutor/institutional-tutor.service';
import { CareerService } from './services/career/career.service';
import { CareerController } from './controllers/career/career.controller';
import { SchoolPeriodModule } from './school-period/school-period.module';
import { DualTrainingModule } from './dual-training/dual-training.module';
@Module({
  imports: [SchoolPeriodModule, DualTrainingModule],
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
    CareerController
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
    CareerService
  ],
})
export class AppModule {}
