import { Injectable } from '@nestjs/common';
import { ProductoDto } from './product.dto';

@Injectable()
export class AppService {
  private products: ProductoDto[] = [
    {
      id: 1,
      name: "Laptop",
      price: 850,
      stock: 10
    },

    {
      id: 2,
      name: "Mouse",
      price: 25,
      stock: 50
    },
  ];

  getHeath(): any {
    return {
      "status": "Online",
      "service": "blog service api",
      "version": "0.0.1",
      "date": new Date()
    };
  }

  createProduct(product: ProductoDto): ProductoDto {
    const newProduct: ProductoDto = {
      id: Math.floor(Math.random() * 1000)+1,
      ...product
    }
    this.products.push(newProduct);
    return {
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": newProduct.stock
    };
  }

  findAll(): ProductoDto[] {
    return this.products;
  }

  findById(id: string): ProductoDto {
    return this.products!
      .find(product=> product.id === Number(id))!;
  }


  update(id: string, updatedProductDto: ProductoDto): any {
    const product: ProductoDto = this.products!
      .find(product=> product.id === Number(id))!;
    if (!product){
      return;
    }
    Object.assign(product,updatedProductDto)
    return product 
  }



  deleteById(id: string): any {
    const index = this.products!
      .findIndex(product=> product.id === Number(id))!;
    if (index ===-1){
      return;
    }
    const deletedProduct=this.products[index]
    this.products.splice(index,1);
    return deletedProduct
  }

  areaTriangulo(data : any): any {
    const area = (data.base * data.altura) /2;
    return {
      "base": data.base,
      "altura": data.altura,
      "areaTriangulo": area,
    };
  }
}