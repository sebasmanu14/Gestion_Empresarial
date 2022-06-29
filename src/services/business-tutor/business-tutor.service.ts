import { Injectable, NotFoundException } from '@nestjs/common';
import { BusinessTutor } from 'src/entities/businessTutor.entity';
import { CreateBusinessTutorDto, UpdateBusinessTutorDto } from 'src/dtos/business-tutor.dtos';

@Injectable()
export class BusinessTutorService {
    private countIdBusinessTutor = 1;

    private businessTutors: BusinessTutor[] = [
        {
            id: 1,
            tutorName: 'Maritza',
            addressTutor: 'La Ecuatoriana',
            companyFk: 1,
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

    create(payload: CreateBusinessTutorDto) {
        this.countIdBusinessTutor = this.countIdBusinessTutor + 1;
        const newProduct = {
            id: this.countIdBusinessTutor,
            ...payload,
        };
        this.businessTutors.push(newProduct);
        return newProduct;
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


