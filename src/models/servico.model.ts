import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'servico' })
export class Servico extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column
  declare nome: string;

  @Column({ allowNull: true })
  declare descricao: string | null;

  @Column({
    field: 'valor_base',
    type: DataType.DECIMAL(10, 2),
    allowNull: true,
  })
  declare valorBase: number | null;

  @Column({ field: 'prazo_estimado_dias', allowNull: true })
  declare prazoEstimadoDias: number | null;

  @Column({ allowNull: true, defaultValue: true })
  declare ativo: boolean | null;
}
