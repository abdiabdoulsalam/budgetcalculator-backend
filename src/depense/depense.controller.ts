/* eslint-disable prettier/prettier */
import { DepenseService } from './depense.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Depensedto } from './dto/depense.dto';

@Controller('depense')
export class DepenseController {
  constructor(private depenseService: DepenseService) {}

  @Get()
  find() {
    return this.depenseService.find();
  }

  @Post()
  create(@Body() depensedto: Depensedto) {
    return this.depenseService.create(depensedto);
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.depenseService.findOne(+id);
  }

  @Patch('/:id')
  update(
    @Body() depensedto: Depensedto,
    @Param('id', ParseIntPipe) id:number
  ){
    return this.depenseService.update(depensedto, id)
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id:number){
    return this.depenseService.delete(id)
  }
}

