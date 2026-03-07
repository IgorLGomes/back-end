import { Module } from '@nestjs/common';
import { BuscaService } from './busca.service';
import { BuscaController } from './busca.controller';

@Module({
  controllers: [BuscaController],
  providers: [BuscaService],
})
export class BuscaModule {}
