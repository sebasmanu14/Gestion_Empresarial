/* eslint-disable prettier/prettier */
import { IsNumber} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateLevelDto {
  @IsNumber()
  readonly semester_level: number;
}

export class UpdateLevelDto extends PartialType(CreateLevelDto) {}
