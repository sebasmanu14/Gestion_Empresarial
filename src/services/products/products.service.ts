import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import console from 'console';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from 'src/dtos/products.dtos';
import { UpdateProductDto } from 'src/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private countIdProduct = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Producto   ejemplo',
      description: ' nuevo producto',
      price: 560,
      stock: 55,
      status: 'Activo',
    },
  ];
  /** Buscar todo */
  findAll() {
    return this.products;
  }

  /**Buscar por id */

  findOne(id: number) {
    return this.products.find((item) => item.id);
  }
  /**Create */

  create(payload: CreateProductDto) {
    this.countIdProduct = this.countIdProduct + 1;
    const newProduct = {
      id: this.countIdProduct,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  /**UPDATE */

  update(id: number, payload: UpdateProductDto) {
    /**
         * const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
    getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
    const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
         */
    //const product = await getRepository(Users).findOne(req.params.id);
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
  /**DELETE  */

  delete(id: number) {
    const indexProduct = this.products.findIndex((item) => item.id === id); //
    if (indexProduct === -1) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }

    this.products.splice(indexProduct, 1);
    return true;
  }
}
