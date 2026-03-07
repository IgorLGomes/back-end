import { Test, TestingModule } from '@nestjs/testing';
import { MapaController } from './mapa.controller';
import { MapaService } from './mapa.service';

describe('MapaController', () => {
  let controller: MapaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapaController],
      providers: [MapaService],
    }).compile();

    controller = module.get<MapaController>(MapaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
