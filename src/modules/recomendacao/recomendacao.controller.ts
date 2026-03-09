import { Controller } from '@nestjs/common';
import { RecomendacaoService } from './recomendacao.service';

@Controller('recomendacao')
export class RecomendacaoController {
  constructor(private readonly recomendacaoService: RecomendacaoService) {}
}
