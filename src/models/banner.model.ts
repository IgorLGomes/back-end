import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'banner' })
export class Banner extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({
    field: 'url_imagem',
    type: DataType.STRING(255),
    allowNull: true,
  })
  declare urlImagem: string | null;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  declare descricao: string | null;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: true,
  })
  declare ativo: boolean | null;
}
