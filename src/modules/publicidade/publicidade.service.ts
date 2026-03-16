import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Publicidade } from 'src/models/publicidade.model';
import { PublicidadeCreateDto } from './dto/publicidade-create.dto';

@Injectable()
export class PublicidadeService {
  constructor(
    @InjectModel(Publicidade)
    private publicidadeModel: typeof Publicidade,
  ) {}

  async criarPublicidade(
    publicidadeDto: PublicidadeCreateDto,
  ): Promise<Publicidade> {
    return await this.publicidadeModel.create({
      titulo: publicidadeDto.titulo,
      conteudo: publicidadeDto.conteudo,
      urlImagem: publicidadeDto.urlImagem,
    });
  }
}
