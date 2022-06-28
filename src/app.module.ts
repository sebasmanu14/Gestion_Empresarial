import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products/products.service';
import { SchoolPeriodService } from './services/school-period/school-period.service';
import { SchoolPeriodController } from './controllers/school-period/school-period.controller';
import { LevelService } from './services/level/level.service';
import { LevelController } from './controllers/level/level.controller';
import { InstitutionalTutorService } from './services/institutional-tutor/institutional-tutor.service';
import { InstitutionalTutorController } from './controllers/institutional-tutor/institutional_tutor.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    SchoolPeriodController,
    LevelController,
    InstitutionalTutorController,
  ],
  providers: [AppService, ProductsService, SchoolPeriodService, LevelService, InstitutionalTutorService],
})
export class AppModule {}
