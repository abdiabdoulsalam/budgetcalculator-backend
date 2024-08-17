/* eslint-disable prettier/prettier */
import { Revenudto } from './dto/revenu.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Revenu } from './entity/revenu.entity';
import { Repository } from 'typeorm';
import { SoldeService } from 'src/solde/solde.service';

@Injectable()
export class RevenuService {
  constructor(
    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>,
    private soldeService: SoldeService,
  ) {}

  find(): Promise<Revenu[]> {
    return this.revenuRepository.find();
  }

  create(revenudto: Revenudto) {
    return this.revenuRepository.save(revenudto);
  }

  findOne(id: number){
    return this.revenuRepository.findOne({ where: { id } });
  }

  update(revenudto: Revenudto, id: number){
    return this.revenuRepository.update(id, revenudto)
  }

  delete(id: number){
    return this.revenuRepository.delete(id)
  }

  async createRevenu(revenu: Revenu): Promise<Revenu> {
    const newRevenu = await this.revenuRepository.save(revenu);
    await this.soldeService.calculateSolde(); 
    return newRevenu;
  }
}
