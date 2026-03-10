import { Test, TestingModule } from '@nestjs/testing';
import { SimuladorService } from './simulador.service';

describe('SimuladorService', () => {
  let service: SimuladorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimuladorService],
    }).compile();

    service = module.get<SimuladorService>(SimuladorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
