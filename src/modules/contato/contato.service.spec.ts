import { Test, TestingModule } from '@nestjs/testing';
import { ContatoService } from './contato.service';
import { getModelToken } from '@nestjs/sequelize';
import { Empresa } from 'src/models/empresa.model';

describe('ContatoService', () => {
  let service: ContatoService;

  const mockEmpresaModel = {
    findOne: jest.fn(),
    findByPk: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContatoService,
        {
          provide: getModelToken(Empresa),
          useValue: mockEmpresaModel,
        },
      ],
    }).compile();

    service = module.get<ContatoService>(ContatoService);
  });

  //TESTES
  it('deve retornar os dados de contato', async () => {
    const empresaMock = {
      id: 1,
      nomeFantasia: 'Empresa Teste',
      cnpj: '123',
      telefone: '9999',
      email: 'teste@email.com',
      endereco: 'Rua A',
      cidade: 'SP',
      estado: 'SP',
      site: 'empresa.com',
    };

    mockEmpresaModel.findOne.mockResolvedValue(empresaMock);

    const result = await service.buscarContato();

    expect(result.id).toBe(1);
    expect(mockEmpresaModel.findOne).toHaveBeenCalled();
  });
});
