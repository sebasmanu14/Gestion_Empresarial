/* eslint-disable prettier/prettier */
import { IsString} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateInstitutionalTutorDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly address: string;

}

export class UpdateInstitutionalTutorDto extends PartialType(CreateInstitutionalTutorDto) {}
