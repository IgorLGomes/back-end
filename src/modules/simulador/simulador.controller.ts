import { Controller } from '@nestjs/common';
import { SimuladorService } from './simulador.service';

@Controller('simulador')
export class SimuladorController {
  constructor(private readonly simuladorService: SimuladorService) {}
}
