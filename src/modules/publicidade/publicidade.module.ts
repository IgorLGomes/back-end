import { Module } from '@nestjs/common';
import { PublicidadeService } from './publicidade.service';
import { PublicidadeController } from './publicidade.controller';

@Module({
  controllers: [PublicidadeController],
  providers: [PublicidadeService],
})
export class PublicidadeModule {}
