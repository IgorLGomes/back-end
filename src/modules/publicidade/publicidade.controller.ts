import { Controller } from '@nestjs/common';
import { PublicidadeService } from './publicidade.service';

@Controller('publicidade')
export class PublicidadeController {
  constructor(private readonly publicidadeService: PublicidadeService) {}
}
