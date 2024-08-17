/* eslint-disable prettier/prettier */
import { RevenuService } from './revenu.service';
import { Module } from '@nestjs/common';
import { Revenu } from './entity/revenu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenuController } from './revenu.controller';
import { SoldeService } from 'src/solde/solde.service';
import { Solde } from 'src/solde/entity/solde.entity';
import { Depense } from 'src/depense/entity/depense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu, Depense, Solde])],
  providers: [RevenuService, SoldeService],
  controllers: [RevenuController],
})
export class RevenuModule {}
