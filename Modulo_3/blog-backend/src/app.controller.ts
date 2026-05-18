import { Body, Controller, Get,Inject,Param,Post} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDTO } from './product_dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

  @Post("/products")
  createProducto(@Body() product:ProductDTO): ProductDTO {
    return this.appService.createProducto(product);
  }
  @Get("/products")
  findAll(): ProductDTO[] {
    return this.appService.findAll();
  }

  @Get("/products")
  findbyid(@Param('id') id: string,
    @Body() updatedProduct: ProductoDto: any
    return this.appService.update{
      identity,
      updatedProduct
    };
  }
  
  @Delete("/products/:id")
  deleteById(@Param('id') id: string): Product
  { return this.appService.deleteById(id);
  }

  @Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any {
    return this.appService.areaTriangulo(data)
  }

}
