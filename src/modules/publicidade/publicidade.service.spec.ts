import { Test, TestingModule } from '@nestjs/testing';
import { PublicidadeService } from './publicidade.service';

describe('PublicidadeService', () => {
  let service: PublicidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicidadeService],
    }).compile();

    service = module.get<PublicidadeService>(PublicidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
