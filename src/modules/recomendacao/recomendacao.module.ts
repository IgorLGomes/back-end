import { Module } from '@nestjs/common';
import { RecomendacaoService } from './recomendacao.service';
import { RecomendacaoController } from './recomendacao.controller';

@Module({
  controllers: [RecomendacaoController],
  providers: [RecomendacaoService],
})
export class RecomendacaoModule {}
