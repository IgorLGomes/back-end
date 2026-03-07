import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'blog' })
export class Blog extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ field: 'url_imagem' })
  declare titulo: string;

  @Column({ allowNull: true, type: DataType.TEXT })
  declare conteudo: string | null;

  @Column({
    field: 'data_publicacao',
    type: DataType.DATE,
    allowNull: true,
  })
  declare dataPublicacao: Date | null;

  @Column({ field: 'url_imagem' })
  declare urlImagem: string;
}
