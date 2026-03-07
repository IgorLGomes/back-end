import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'empresa' })
export class Empresa extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ field: 'nome_fantasia' })
  declare nomeFantasia: string;

  @Column
  declare cnpj: string;

  @Column
  declare telefone: string;

  @Column
  declare email: string;

  @Column
  declare endereco: string;

  @Column
  declare cidade: string;

  @Column
  declare estado: string;

  @Column
  declare site: string;
}
