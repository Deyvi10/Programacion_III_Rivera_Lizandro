import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }


  @Post("/products")
  createProduct(@Body() product: ProductoDto): ProductoDto {
    return this.appService.createProduct(product);
  }


  @Get("/products")
  findAll(): ProductoDto[] {
    return this.appService.findAll();
  }


  @Get("/products/:id")
  findById(@Param('id') id: string): ProductoDto {
    return this.appService.findById(id);
  }


  @Put("/products/:id")
  update(@Param('id') id: string,
    @Body() updatedProduct : ProductoDto): any {
    return this.appService.update(
      id, 
      updatedProduct
    );
  }


  @Delete("/products/:id")
  deleteById(@Param('id') id: string): ProductoDto {
    return this.appService.deleteById(id);
  }
  

  @Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any {
    return this.appService.areaTriangulo(data);
  }


  



}
