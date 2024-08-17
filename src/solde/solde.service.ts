/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from 'src/depense/entity/depense.entity';
import { Revenu } from 'src/revenu/entity/revenu.entity';
import { Repository } from 'typeorm';
import { Solde } from './entity/solde.entity';

@Injectable()
export class SoldeService {
  constructor(
    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>,

    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,

    @InjectRepository(Solde)
    private soldeRepository: Repository<Solde>,
  ) {}

  async calculateSolde(): Promise<number> {
    const totalRevenu = await this.revenuRepository
      .createQueryBuilder('revenu')
      .select('SUM(revenu.montant)', 'sum')
      .getRawOne();
      
    const totalDepense = await this.depenseRepository
      .createQueryBuilder('depense')
      .select('SUM(depense.montant)', 'sum')
      .getRawOne();

    const solde = (totalRevenu.sum || 0) - (totalDepense.sum || 0);

    const newSolde = this.soldeRepository.create({ solde });
    await this.soldeRepository.save(newSolde);

    return solde;
  }
}
