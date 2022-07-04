import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCareerdDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;

}

export class UpdateCareerDto extends PartialType(CreateCareerdDto) {}
