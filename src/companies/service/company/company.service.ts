import { Injectable, NotFoundException } from '@nestjs/common';
import { Company } from 'src/companies/entity/company.entity';
import {
  CreateCompanyDto,
  UpdateCompanyDto,
} from 'src/companies/dtos/company.dtos';

@Injectable()
export class CompanyService {
  private countIdCompany = 1;

  private Companys: Company[] = [
    {
      id: 1,
      company_name: 'ESPE',
      phone: '0969651205',
      company_address:'Nicolas Cevallos oe563',
      company_description: 'Gestion estudiantil',
      ruc:'173568903903'
    },
  ];

  /** Buscar todo */
  findAll() {
    return this.Companys;
  }

  /**Buscar por id */

  findOne(id: number) {
    return this.Companys.find((item) => item.id == id);
  }
  /**Create */

  create(payload: CreateCompanyDto) {
    this.countIdCompany = this.countIdCompany + 1;
    const newCompany = {
      id: this.countIdCompany,
      ...payload,
    };
    this.Companys.push(newCompany);
    return newCompany;
  }

  /**UPDATE */

  update(id: number, payload: UpdateCompanyDto) {
    /**
         * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
    getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
    const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
         */
    //const product = await getRepository(Users).findOne(req.params.id);
    const Company = this.findOne(id);
    if (Company) {
      const index = this.Companys.findIndex((item) => item.id == id);
      this.Companys[index] = {
        ...Company,
        ...payload,
      };
      return this.Companys[index];
    }
    return null;
  }
  /**DELETE  */

  delete(id: number) {
    const indexCompany = this.Companys.findIndex(
      (item) => item.id === id,
    ); //
    if (indexCompany === -1) {
      throw new NotFoundException(`Empresa ${id} no encontrada`);
    }

    this.Companys.splice(indexCompany, 1);
    return true;
  }
}

