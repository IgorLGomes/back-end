import { IsString } from 'class-validator';

export class PublicidadeCreateDto {
  @IsString()
  titulo: string;

  @IsString()
  conteudo: string;

  @IsString()
  urlImagem: string;
}
