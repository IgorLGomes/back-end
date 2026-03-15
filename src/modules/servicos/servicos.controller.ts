import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { Servico } from 'src/models/servico.model';

@Controller('servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Get()
  findAll(): Promise<Servico[]> {
    return this.servicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Servico> {
    return this.servicosService.findOne(id);
  }
}
