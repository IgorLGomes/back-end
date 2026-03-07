import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Solicitacao } from './solicitacao.model';

@Table({ tableName: 'documento_solicitacao' })
export class DocumentoSolicitacao extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Solicitacao)
  @Column({ field: 'solicitacao_id' })
  declare solicitacaoId: number;

  @Column({ field: 'nome_hash', allowNull: true })
  declare nomeHash: string | null;

  @Column({ field: 'tipo_documento', allowNull: true })
  declare tipoDocumento: string | null;

  @Column({
    field: 'status_validacao',
    type: 'ENUM',
    values: ['pendente', 'aprovado', 'rejeitado'],
    defaultValue: 'pendente',
  })
  declare statusValidacao: 'pendente' | 'aprovado' | 'rejeitado';

  @Column({ field: 'data_upload', allowNull: true })
  declare dataUpload: Date | null;
}
