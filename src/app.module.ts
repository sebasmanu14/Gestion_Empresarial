import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
  ],
  providers: [AppService, ProductsService, SchoolPeriodService],
})
export class AppModule {}
