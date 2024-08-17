/* eslint-disable prettier/prettier */
import { Revenudto } from './dto/revenu.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { Revenu } from './entity/revenu.entity';

@Controller('revenu')
export class RevenuController {
  constructor(private revenuService: RevenuService) {}

  @Get()
  find(): Promise<Revenu[]>{
    return this.revenuService.find()
  }

  @Post()
  create(@Body() revenudto: Revenudto){
    return this.revenuService.create(revenudto)
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.revenuService.findOne(+id);
  }

  @Patch('/:id')
  update(
    @Body() depensedto: Revenudto,
    @Param('id', ParseIntPipe) id:number
  ){
    return this.revenuService.update(depensedto, id)
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id:number){
    return this.revenuService.delete(id)
  }

}
