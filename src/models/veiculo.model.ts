import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Usuario } from './usuario.model';

@Table({ tableName: 'veiculo' })
export class Veiculo extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Usuario)
  @Column({ field: 'usuario_id' })
  declare usuarioId: number;

  @BelongsTo(() => Usuario)
  declare usuario: Usuario;

  @Column({
    type: DataType.STRING(10),
  })
  declare placa: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  declare renavam: string | null;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  declare marca: string | null;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  declare modelo: string | null;

  @Column({
    field: 'ano_fabricacao',
    allowNull: true,
  })
  declare anoFabricacao: number | null;

  @Column({
    field: 'ano_modelo',
    allowNull: true,
  })
  declare anoModelo: number | null;
}
