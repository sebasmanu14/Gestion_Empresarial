/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InstitutionalTutor } from 'src/institutional-tutors/entities/institutionalTutor.entity';
import { CreateInstitutionalTutorDto, UpdateInstitutionalTutorDto }
from 'src/institutional-tutors/dtos/institutional-tutor.dtos';

@Injectable()
export class InstitutionalTutorService {
    private countIdInstitutionalTutor = 1;

    private institutionalTutors: InstitutionalTutor[] = [
      {
        id: 1,
        identityCard:1754985426,
        name: 'Luis',
        lastName:'Olmedo',
        institutionalEmail:'wh@yavirac.edu.ec',
        personalEmail:'wop@gmail.com',
        address:'Guamani',
        phone:'09890911452',
        studentNumbers:4,
      },
    ];

    /** Buscar todo */
    findAll() {
      return this.institutionalTutors;
    }

    /**Buscar por id */

    findOne(id: number) {
      return this.institutionalTutors.find((item) => item.id == id);
    }
    /**Create */

    create(payload: CreateInstitutionalTutorDto) {
      this.countIdInstitutionalTutor = this.countIdInstitutionalTutor + 1;
      const newInstitutionalTutor = {
        id: this.countIdInstitutionalTutor,
        ...payload,
      };
      this.institutionalTutors.push(newInstitutionalTutor);
      return newInstitutionalTutor;
    }

    /**UPDATE */

    update(id: number, payload: UpdateInstitutionalTutorDto) {
      /**
           * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
      getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
      const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
           */
      //const product = await getRepository(Users).findOne(req.params.id);
      const institutionalTutor = this.findOne(id);
      if (institutionalTutor) {
        const index = this.institutionalTutors.findIndex((item) => item.id == id);
        this.institutionalTutors[index] = {
          ...institutionalTutor,
          ...payload,
        };
        return this.institutionalTutors[index];
      }
      return null;
    }
    /**DELETE  */

    delete(id: number) {
      const indexInstitutionalTutor = this.institutionalTutors.findIndex(
        (item) => item.id === id,
      ); //
      if (indexInstitutionalTutor === -1) {
        throw new NotFoundException(`Tutor institucional ${id} no encontrado`);
      }

      this.institutionalTutors.splice(indexInstitutionalTutor, 1);
      return true;
    }
}
