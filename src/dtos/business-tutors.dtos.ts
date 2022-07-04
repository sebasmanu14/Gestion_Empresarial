/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBusinessTutorDto {
  @IsString()
  readonly tutorName: string;
  @IsString()
  readonly addressTutor: string;
}

export class UpdateBusinessTutorDto extends PartialType(
  CreateBusinessTutorDto,
) {}
