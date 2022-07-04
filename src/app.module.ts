/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { BusinessTutorsService } from './services/business-tutors/business-tutors.service';
import { BusinessTutorsController } from './controllers/business-tutor/business-tutors.controller';
import { DualTrainingController } from './controllers/dual-training/dual-training.controller';
import { DualTrainingService } from './services/dual-training/dual-training.service';
import { StudentController } from './controllers/student/student.controller';
import { StudentService } from './services/student/student.service';
import { CompanyController } from './controllers/company/company.controller';
import { CompanyService } from './services/company/company.service';
import { LevelController } from './levels/controllers/level.controller';
import { LevelService } from './levels/services/level.service';
import { InstitutionalTutorController } from './institutional-tutors/controllers/institutional_tutor.controller';
import { InstitutionalTutorService } from './institutional-tutors/services/institutional-tutor.service';
import { CareerController } from './controllers/career/career.controller';
import { CareerService } from './services/career/career.service';
import { LevelModule } from './levels/levels.module';
import { InstitutionalTutorModule } from './institutional-tutors/institutional-tutors.module';
@Module({
  imports: [InstitutionalTutorModule, LevelModule],
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
