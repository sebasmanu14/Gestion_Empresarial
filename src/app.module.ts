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

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    DualTrainingController,
    StudentController
  ],
  providers: [
    AppService,
    ProductsService,
    SchoolPeriodService,
    DualTrainingService,
    StudentService
  ],
})
export class AppModule {}
