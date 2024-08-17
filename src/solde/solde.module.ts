/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { SoldeController } from './solde.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solde } from './entity/solde.entity';
import { Depense } from 'src/depense/entity/depense.entity';
import { Revenu } from 'src/revenu/entity/revenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solde, Depense, Revenu])],
  providers: [SoldeService],
  controllers: [SoldeController]
})
export class SoldeModule {}
