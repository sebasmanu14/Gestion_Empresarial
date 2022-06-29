import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateStudentdDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly phone: number;
  @IsString()
  readonly address: string;
}

export class UpdateStudentDto extends PartialType(CreateStudentdDto) {}
