import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsNumber()
  readonly price: number;
  @IsString()
  readonly stock: number;
  @IsString()
  readonly status: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
