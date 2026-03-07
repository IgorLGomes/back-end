import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'faq' })
export class Faq extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column
  declare pergunta: string;

  @Column
  declare resposta: string;
}
