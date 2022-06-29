import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCompanyDto {
  @IsString()
  readonly company_name: string;
  readonly phone:string;
  readonly company_address:string;
  readonly company_description:string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
