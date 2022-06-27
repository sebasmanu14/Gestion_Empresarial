import { Injectable, NotFoundException } from '@nestjs/common';
import { SchoolPeriod } from 'src/entities/schoolPeriod.entity';
import {
  CreateSchoolPeriodDto,
  UpdateSchoolPeriodDto,
} from 'src/dtos/school-period.dtos';

@Injectable()
export class SchoolPeriodService {
  private countIdSchoolPeriod = 1;

  private schoolPeriods: SchoolPeriod[] = [
    {
      id: 1,
      year: '2022',
    },
  ];

  /** Buscar todo */
  findAll() {
    return this.schoolPeriods;
  }

  /**Buscar por id */

  findOne(id: number) {
    return this.schoolPeriods.find((item) => item.id);
  }
  /**Create */

  create(payload: CreateSchoolPeriodDto) {
    this.countIdSchoolPeriod = this.countIdSchoolPeriod + 1;
    const newSchoolPeriod = {
      id: this.countIdSchoolPeriod,
      ...payload,
    };
    this.schoolPeriods.push(newSchoolPeriod);
    return newSchoolPeriod;
  }

  /**UPDATE */

  update(id: number, payload: UpdateSchoolPeriodDto) {
    /**
         * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
    getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
    const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
         */
    //const product = await getRepository(Users).findOne(req.params.id);
    const schoolPeriod = this.findOne(id);
    if (schoolPeriod) {
      const index = this.schoolPeriods.findIndex((item) => item.id === id);
      this.schoolPeriods[index] = {
        ...schoolPeriod,
        ...payload,
      };
      return this.schoolPeriods[index];
    }
    return null;
  }
  /**DELETE  */

  delete(id: number) {
    const indexSchoolPeriod = this.schoolPeriods.findIndex(
      (item) => item.id === id,
    ); //
    if (indexSchoolPeriod === -1) {
      throw new NotFoundException(`Periodo Electivo ${id} no encontrado`);
    }

    this.schoolPeriods.splice(indexSchoolPeriod, 1);
    return true;
  }
}
