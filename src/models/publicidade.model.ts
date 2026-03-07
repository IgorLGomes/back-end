import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'publicidade' })
export class Publicidade extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ allowNull: true, type: DataType.STRING(150) })
  declare titulo: string | null;

  @Column({ allowNull: true, type: DataType.TEXT })
  declare conteudo: string | null;

  @Column({ field: 'url_imagem', allowNull: true, type: DataType.STRING(255) })
  declare urlImagem: string | null;
}
