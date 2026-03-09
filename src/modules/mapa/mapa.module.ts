import { Module } from '@nestjs/common';
import { MapaService } from './mapa.service';
import { MapaController } from './mapa.controller';

@Module({
  controllers: [MapaController],
  providers: [MapaService],
})
export class MapaModule {}
