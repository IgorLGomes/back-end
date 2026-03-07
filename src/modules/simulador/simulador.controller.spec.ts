import { Test, TestingModule } from '@nestjs/testing';
import { SimuladorController } from './simulador.controller';
import { SimuladorService } from './simulador.service';

describe('SimuladorController', () => {
  let controller: SimuladorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimuladorController],
      providers: [SimuladorService],
    }).compile();

    controller = module.get<SimuladorController>(SimuladorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
