import {IsString,IsNumber} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBusinessTutorDto{
    @IsString()
    readonly tutorName: string;
    @IsString()
    readonly addressTutor:string;
    @IsNumber()
    readonly companyFk: number;
}

export class UpdateBusinessTutorDto extends PartialType(CreateBusinessTutorDto){}


