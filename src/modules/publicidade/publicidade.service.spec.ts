import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { Publicidade } from 'src/models/publicidade.model';
import { PublicidadeService } from './publicidade.service';

describe('PublicidadeService', () => {
  let service: PublicidadeService;

  const mockPublicidadeModel = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PublicidadeService,
        {
          provide: getModelToken(Publicidade),
          useValue: mockPublicidadeModel,
        },
      ],
    }).compile();

    service = module.get<PublicidadeService>(PublicidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve criar publicidade com sucesso!', () => {
    const publicidadeData = {
      titulo: 'Nova publicidade',
      conteudo: 'Conteudo da publicidade',
      urlImagem: 'http://example.com/publicidade',
    };

    const mockPublicidade = {
      id: 1,
      ...publicidadeData,
    };

    mockPublicidadeModel.create.mockResolvedValue(mockPublicidade);

    expect(service.criarPublicidade(publicidadeData)).resolves.toEqual(
      mockPublicidade,
    );
    expect(mockPublicidadeModel.create).toHaveBeenCalledWith(publicidadeData);
  });
});
