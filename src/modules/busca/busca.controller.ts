import { Controller } from '@nestjs/common';
import { BuscaService } from './busca.service';

@Controller('busca')
export class BuscaController {
  constructor(private readonly buscaService: BuscaService) {}
}
