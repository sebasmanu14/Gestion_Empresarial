import { Injectable, NotFoundException } from '@nestjs/common';
import { Career } from 'src/carrers_module/entity/career.entity';
import { CreateCareerdDto, UpdateCareerDto } from 'src/carrers_module/dtos/career.dtos';

@Injectable()
export class CareerService {
  private countIdCarrers = 1;

  private careers: Career[] = [
    {
      id: 1,
      name: 'Software develop',
      description: 'This is a description',
    },
  ];

  /** Buscar todo */
  findAll() {
    return this.careers;
  }

  /**Buscar por id */

  findOne(id: number) {
    return this.careers.find((item) => item.id == id);
  }
  /**Create */

  create(payload: CreateCareerdDto) {
    this.countIdCarrers = this.countIdCarrers + 1;
    const newCareer = {
      id: this.countIdCarrers,
      ...payload,
    };
    this.careers.push(newCareer);
    return newCareer;
  }

  /**UPDATE */

  update(id: number, payload: UpdateCareerDto) {
    /**
         * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
    getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
    const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
         */
    //const product = await getRepository(Users).findOne(req.params.id);
    const career = this.findOne(id);
    if (career) {
      const index = this.careers.findIndex((item) => item.id == id);
      this.careers[index] = {
        ...career,
        ...payload,
      };
      return this.careers[index];
    }
    return null;
  }
  /**DELETE  */

  delete(id: number) {
    const indexCareer = this.careers.findIndex((item) => item.id === id); //
    if (indexCareer === -1) {
      throw new NotFoundException(`Carrera ${id} no encontrada`);
    }

    this.careers.splice(indexCareer, 1);
    return true;
  }
}
