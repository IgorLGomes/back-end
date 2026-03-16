import { Test, TestingModule } from '@nestjs/testing';
import { PublicidadeController } from './publicidade.controller';
import { PublicidadeService } from './publicidade.service';

describe('PublicidadeController', () => {
  let controller: PublicidadeController;

  const mockPublicidadeService = {
    criarPublicidade: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicidadeController],
      providers: [
        {
          provide: PublicidadeService,
          useValue: mockPublicidadeService,
        },
      ],
    }).compile();

    controller = module.get<PublicidadeController>(PublicidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

    mockPublicidadeService.criarPublicidade.mockResolvedValue(mockPublicidade);

    expect(controller.criarPublicidade(publicidadeData)).resolves.toEqual(
      mockPublicidade,
    );
    expect(mockPublicidadeService.criarPublicidade).toHaveBeenCalledWith(
      publicidadeData,
    );
  });
});
