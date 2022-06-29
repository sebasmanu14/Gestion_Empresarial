import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';
import { BusinessTutorService } from './services/business-tutor/business-tutor.service';
import { BusinessTutorController } from './controllers/business-tutor/business-tutor.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    BusinessTutorController,
  ],
  providers: [AppService, ProductsService, SchoolPeriodService, BusinessTutorService],
})
export class AppModule {}
