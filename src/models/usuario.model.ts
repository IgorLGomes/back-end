import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'usuario' })
export class Usuario extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column
  declare nome: string;

  @Column({ unique: true })
  declare email: string;

  @Column
  declare senha: string;

  @Column({
    type: 'enum',
    values: ['cliente', 'administrador'],
    defaultValue: 'cliente',
  })
  declare nivel: 'cliente' | 'administrador';

  @Column({ field: 'cpf_cnpj', allowNull: true })
  declare cpfCnpj: string | null;

  @Column({ allowNull: true })
  declare celular: string | null;

  @Column({
    field: 'data_cadastro',
    allowNull: true,
  })
  declare dataCadastro: Date;
}
