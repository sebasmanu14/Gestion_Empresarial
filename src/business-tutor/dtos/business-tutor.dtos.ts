import {IsString,IsNumber} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBusinessTutordDto{
    @IsNumber()
    readonly identification_card: number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly surname: string;
    @IsString()
    readonly address: string;
    @IsString()
    readonly institutional_mail: string;
    @IsString()
    readonly personal_mail: string;
    @IsNumber()
    readonly telephone: number;
}

export class UpdateBusinessTutorDto extends PartialType(CreateBusinessTutordDto){}


