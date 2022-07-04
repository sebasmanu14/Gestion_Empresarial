import { Injectable, NotFoundException } from '@nestjs/common';
import { BusinessTutor } from 'src/business-tutor/entities/businessTutor.entity';
import { CreateBusinessTutordDto, UpdateBusinessTutorDto } from 'src/business-tutor/dtos/business-tutor.dtos';

@Injectable()
export class BusinessTutorService {
    private countIdBusinessTutors = 1;

    private businessTutors: BusinessTutor[] = [
        {
            id: 1,
            identification_card: 55554547,
            name: 'Juan',
            surname: 'Perez',
            address: 'La Ecuatoriana',
            institutional_mail: 'juanperez@yavirac.edu.ec',
            personal_mail: 'juanperez@gmail.com',
            telephone: 498956554,

        },
    ];
    /** Buscar todo */
    findAll() {
        return this.businessTutors;
    }

    /**Buscar por id */

    findOne(id: number) {
        return this.businessTutors.find((item) => item.id);
    }
    /**Create */

    create(payload: CreateBusinessTutordDto) {
        this.countIdBusinessTutors = this.countIdBusinessTutors + 1;
        const newBusinessTutor = {
            id: this.countIdBusinessTutors,
            ...payload,
        };
        this.businessTutors.push(newBusinessTutor);
        return newBusinessTutor;
    }

    /**UPDATE */

    update(id: number, payload: UpdateBusinessTutorDto) {
        /**
             * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
        getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
        const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
             */
        //const product = await getRepository(Users).findOne(req.params.id);
        const businessTutor = this.findOne(id);
        if (businessTutor) {
            const index = this.businessTutors.findIndex((item) => item.id === id);
            this.businessTutors[index] = {
                ...businessTutor,
                ...payload,
            };
            return this.businessTutors[index];
        }
        return null;
    }
    /**DELETE  */

    delete(id: number) {
        const indexBusinessTutor = this.businessTutors.findIndex((item) => item.id === id); //
        if (indexBusinessTutor === -1) {
            throw new NotFoundException(`Tutor Empresarial ${id} no encontrado`);
        }

        this.businessTutors.splice(indexBusinessTutor, 1);
        return true;
    }
}


