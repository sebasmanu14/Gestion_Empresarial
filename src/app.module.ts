/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';
<<<<<<< HEAD
import { BusinessTutorService } from './services/business-tutors/business-tutors.service';
import { BusinessTutorController } from './controllers/business-tutor/business-tutors.controller';

=======
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
>>>>>>> bb6a9865013a72cae3859e4dc614675ff4091d10
@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
<<<<<<< HEAD
    BusinessTutorController,
  ],
  providers: [AppService, ProductsService, SchoolPeriodService, BusinessTutorService],
=======
    DualTrainingController,
    StudentController,
    CompanyController,
    LevelController,
    InstitutionalTutorController,
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
  ],
>>>>>>> bb6a9865013a72cae3859e4dc614675ff4091d10
})
export class AppModule {}
