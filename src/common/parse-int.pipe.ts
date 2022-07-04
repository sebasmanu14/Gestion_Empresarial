import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const valor = parseInt(value, 10); //fghjkljhgfghj
    if (isNaN(valor)) {
      throw new BadRequestException(`${valor} esto no es un numero `);
    }
    return valor;
  }
}
