import { Body, Controller, Logger, Post } from '@nestjs/common';
import { PublicidadeService } from './publicidade.service';
import { PublicidadeCreateDto } from './dto/publicidade-create.dto';

@Controller('publicidade')
export class PublicidadeController {
  private readonly logger = new Logger(PublicidadeController.name);

  constructor(private readonly publicidadeService: PublicidadeService) {}

  @Post()
  criarPublicidade(@Body() publicidadeDto: PublicidadeCreateDto) {
    this.logger.log(`Iniciando criacao de publicidade...`);
    return this.publicidadeService.criarPublicidade(publicidadeDto);
  }
}
