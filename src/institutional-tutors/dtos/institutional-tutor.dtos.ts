/* eslint-disable prettier/prettier */
import { IsNumber, IsString} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateInstitutionalTutorDto {
  @IsNumber()
  readonly identityCard: number;
  @IsString()
  readonly name: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly institutionalEmail: string;
  @IsString()
  readonly personalEmail: string;
  @IsString()
  readonly address: string;
  @IsString()
  readonly phone: string;
  @IsNumber()
  readonly studentNumbers: number;
}

export class UpdateInstitutionalTutorDto extends PartialType(CreateInstitutionalTutorDto) {}
