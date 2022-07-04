import { Injectable, NotFoundException } from '@nestjs/common';
import { DualTraining } from 'src/dual-training/entity/dualTraining.entity';

import {
  CreateDualTrainingDto,
  UpdateDualTrainingDto,
} from 'src/dual-training/dtos/dualTrainings.dtos';

@Injectable()
export class DualTrainingService {
  private countIdDualTraining = 1;

  private dualTrainings: DualTraining[] = [
    {
      id: 1,
      name: 'Formacion Dual I',
      description: 'Formacion dual de dasarrollo de software',
    },
  ];

  /** Buscar todo */
  findAll() {
    return this.dualTrainings;
  }

  /**Buscar por id */
  findOne(id: number) {
    return this.dualTrainings.find((item) => item.id == id);
  }

  /**Create */
  create(payload: CreateDualTrainingDto) {
    this.countIdDualTraining = this.countIdDualTraining + 1;
    const newdualTraining = {
      id: this.countIdDualTraining,
      ...payload,
    };
    this.dualTrainings.push(newdualTraining);
    return newdualTraining;
  }

  /**UPDATE */
  update(id: number, payload: UpdateDualTrainingDto) {
    /**
         * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
    getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
    const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
         */
    //const product = await getRepository(Users).findOne(req.params.id);
    const dualTraining = this.findOne(id);
    if (dualTraining) {
      const index = this.dualTrainings.findIndex((item) => item.id == id);
      this.dualTrainings[index] = {
        ...dualTraining,
        ...payload,
      };
      return this.dualTrainings[index];
    }
    return null;
  }

  /**DELETE  */
  delete(id: number) {
    const indexDualTraining = this.dualTrainings.findIndex(
      (item) => item.id === id,
    ); //
    if (indexDualTraining === -1) {
      throw new NotFoundException(`Formacion Dual ${id} no encontrado`);
    }

    this.dualTrainings.splice(indexDualTraining, 1);
    return true;
  }
}
