import { Injectable, NotFoundException } from '@nestjs/common';
import { Level } from 'src/entities/level.entity';
import { CreateLevelDto, UpdateLevelDto }
from 'src/dtos/level.dtos';

@Injectable()
export class LevelService {
    private countIdLevel = 1;

  private levels: Level[] = [
    {
      id: 1,
      semester_level: 2022,
    },
  ];

  /** Buscar todo */
  findAll() {
    return this.levels;
  }

  /**Buscar por id */

  findOne(id: number) {
    return this.levels.find((item) => item.id);
  }
  /**Create */

  create(payload: CreateLevelDto) {
    this.countIdLevel = this.countIdLevel + 1;
    const newLevel = {
      id: this.countIdLevel,
      ...payload,
    };
    this.levels.push(newLevel);
    return newLevel;
  }

  /**UPDATE */

  update(id: number, payload: UpdateLevelDto) {
    /**
         * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
    getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
    const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
         */
    //const product = await getRepository(Users).findOne(req.params.id);
    const level = this.findOne(id);
    if (level) {
      const index = this.levels.findIndex((item) => item.id === id);
      this.levels[index] = {
        ...level,
        ...payload,
      };
      return this.levels[index];
    }
    return null;
  }
  /**DELETE  */

  delete(id: number) {
    const indexLevel = this.levels.findIndex(
      (item) => item.id === id,
    ); //
    if (indexLevel === -1) {
      throw new NotFoundException(`Nivel ${id} no encontrado`);
    }

    this.levels.splice(indexLevel, 1);
    return true;
  }
}
