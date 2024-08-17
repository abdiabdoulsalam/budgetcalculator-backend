import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './entity/depense.entity';
import { SoldeService } from 'src/solde/solde.service';
import { Revenu } from 'src/revenu/entity/revenu.entity';
import { Solde } from 'src/solde/entity/solde.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Depense, Revenu, Solde])],
  providers: [DepenseService, SoldeService],
  controllers: [DepenseController],
})
export class DepenseModule {}
