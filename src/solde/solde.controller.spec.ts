/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { SoldeController } from './solde.controller';

describe('SoldeController', () => {
  let controller: SoldeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoldeController],
    }).compile();

    controller = module.get<SoldeController>(SoldeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
