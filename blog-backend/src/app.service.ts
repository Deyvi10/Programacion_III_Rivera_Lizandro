import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHeath(): any{
    return {
      "status": "Online",
      "service": "blog service api",
      "version": "0.0.1",
      "date": new Date()
    };
  }
  createProduct(product): any {
    return {
      "id": product.id,
      "name": product.name,
      "price": product.price,
      "stock":10
    }; 
  }
}
