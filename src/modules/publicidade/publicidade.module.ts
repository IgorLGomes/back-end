import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publicidade } from 'src/models/publicidade.model';
import { PublicidadeService } from './publicidade.service';
import { PublicidadeController } from './publicidade.controller';

@Module({
  imports: [SequelizeModule.forFeature([Publicidade])],
  controllers: [PublicidadeController],
  providers: [PublicidadeService],
})
export class PublicidadeModule {}
