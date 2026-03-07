import { Controller } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';

@Controller('agendamento')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}
}
