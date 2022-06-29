/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';
import { DualTrainingService } from './services/dual-training/dual-training.service';
import { DualTrainingController } from './controllers/dual-training/dual-training.controller';
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
@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    DualTrainingController,
    StudentController,
    CompanyController,
    LevelController,
    InstitutionalTutorController,
    CareerController,
  ],
  providers: [
    AppService,
    ProductsService,
    SchoolPeriodService,
    DualTrainingService,
    StudentService,
    CompanyService,
    LevelService,
    InstitutionalTutorService,
    CareerService,
  ],
})
export class AppModule {}
