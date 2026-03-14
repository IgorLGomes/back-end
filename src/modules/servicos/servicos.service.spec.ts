import { Test, TestingModule } from '@nestjs/testing';
import { ServicosService } from './servicos.service';
import { getModelToken } from '@nestjs/sequelize';
import { Servico } from 'src/models/servico.model';
import { NotFoundException } from '@nestjs/common';

describe('ServicosService', () => {
  let service: ServicosService;

  const mockServicoModel = {
    findAll: jest.fn(),
    findByPk: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicosService,
        {
          provide: getModelToken(Servico),
          useValue: mockServicoModel,
        },
      ],
    }).compile();

    service = module.get<ServicosService>(ServicosService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('deve retornar a lista de serviços', async () => {
      const mockList = [
        { id: 1, nome: 'Troca de óleo', descricao: 'Serviço de troca de óleo' },
        { id: 2, nome: 'Alinhamento', descricao: 'Serviço de alinhamento' },
      ];
      mockServicoModel.findAll.mockResolvedValue(mockList);

      const result = await service.findAll();

      expect(result).toEqual(mockList);
      expect(mockServicoModel.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('deve retornar o serviço quando encontrado', async () => {
      const mockServico = { id: 1, nome: 'Troca de óleo', descricao: 'Serviço de troca de óleo' };
      mockServicoModel.findByPk.mockResolvedValue(mockServico);

      const result = await service.findOne(1);

      expect(result).toEqual(mockServico);
      expect(mockServicoModel.findByPk).toHaveBeenCalledWith(1);
    });

    it('deve lançar NotFoundException quando serviço não encontrado', async () => {
      mockServicoModel.findByPk.mockResolvedValue(null);

      await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
      expect(mockServicoModel.findByPk).toHaveBeenCalledWith(99);
    });
  });
});
