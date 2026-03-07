import { Test, TestingModule } from '@nestjs/testing';
import { PublicidadeController } from './publicidade.controller';
import { PublicidadeService } from './publicidade.service';

describe('PublicidadeController', () => {
  let controller: PublicidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicidadeController],
      providers: [PublicidadeService],
    }).compile();

    controller = module.get<PublicidadeController>(PublicidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
