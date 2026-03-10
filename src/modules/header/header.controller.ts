import { Controller } from '@nestjs/common';
import { HeaderService } from './header.service';

@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}
}
