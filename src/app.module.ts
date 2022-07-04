/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodController } from './school-period/controllers/school-period.controller';
import { SchoolPeriodService } from './school-period/service/school-period.service';
import { BusinessTutorsService } from './services/business-tutors/business-tutors.service';
import { BusinessTutorsController } from './controllers/business-tutor/business-tutors.controller';
import { DualTrainingController } from './dual-training/controller/dual-training.controller';
import { DualTrainingService } from './dual-training/service/dual-training.service';
import { StudentController } from './students/student_controller/student.controller';
import { StudentService } from './students/service/student.service';
import { CompanyController } from './companies/company_controller/company.controller';
import { CompanyService } from './companies/service/company/company.service';
import { LevelController } from './levels/controllers/level.controller';
import { LevelService } from './levels/services/level.service';
import { InstitutionalTutorController } from './institutional-tutors/controllers/institutional_tutor.controller';
import { InstitutionalTutorService } from './institutional-tutors/services/institutional-tutor.service';
import { CareerController } from './carrers_module/career_controller/career.controller';
import { LevelModule } from './levels/levels.module';
import { InstitutionalTutorModule } from './institutional-tutors/institutional-tutors.module';
import { CareerService } from './carrers_module/service/career/career.service';
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
