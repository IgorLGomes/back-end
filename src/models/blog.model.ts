import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'blog' })
export class Blog extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING(150), allowNull: true })
  declare titulo: string | null;

  @Column({ type: DataType.TEXT, allowNull: true })
  declare conteudo: string | null;

  @Column({
    field: 'data_publicacao',
    type: DataType.DATE,
    allowNull: true,
  })
  declare dataPublicacao: Date | null;

  @Column({
    field: 'url_imagem',
    type: DataType.STRING(255),
    allowNull: true,
  })
  declare urlImagem: string | null;
}
