/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDualTrainingDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
}

export class UpdateDualTrainingDto extends PartialType(CreateDualTrainingDto) {}
