/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { SoldeService } from './solde.service';

@Controller('solde')
export class SoldeController {
  constructor(private readonly soldeService: SoldeService) {}

  @Get()
  async getSolde() {
    const solde = await this.soldeService.calculateSolde();
    return { solde };
  }
}