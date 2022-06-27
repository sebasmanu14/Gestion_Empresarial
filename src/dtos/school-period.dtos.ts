import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSchoolPeriodDto {
  @IsString()
  readonly year: string;
}

export class UpdateSchoolPeriodDto extends PartialType(CreateSchoolPeriodDto) {}
