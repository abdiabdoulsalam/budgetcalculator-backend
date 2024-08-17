/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entity/depense.entity';
import { Repository } from 'typeorm';
import { Depensedto } from './dto/depense.dto';
import { SoldeService } from 'src/solde/solde.service';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,
    private soldeService: SoldeService,
  ) {}

  find(): Promise<Depense[]> {
    return this.depenseRepository.find();
  }

  create(depensedto: Depensedto) {
    return this.depenseRepository.save(depensedto);
  }

  findOne(id: number){
    return this.depenseRepository.findOne({ where: { id } });
  }

  update(depensedto: Depensedto, id: number){
    return this.depenseRepository.update(id, depensedto)
  }

  delete(id: number){
    return this.depenseRepository.delete(id)
  }

  async createDepense(depense: Depense): Promise<Depense> {
    const newRevenu = await this.depenseRepository.save(depense);
    await this.soldeService.calculateSolde(); 
    return newRevenu;
  }
 
}
