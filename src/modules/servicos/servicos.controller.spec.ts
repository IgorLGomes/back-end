import { Test, TestingModule } from '@nestjs/testing';
import { ServicosController } from './servicos.controller';
import { ServicosService } from './servicos.service';
import { NotFoundException } from '@nestjs/common';

describe('ServicosController', () => {
  let controller: ServicosController;

  const mockServicosService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicosController],
      providers: [
        {
          provide: ServicosService,
          useValue: mockServicosService,
        },
      ],
    }).compile();

    controller = module.get<ServicosController>(ServicosController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('deve retornar lista de serviços', async () => {
      const mockList = [
        { id: 1, nome: 'Troca de óleo', descricao: 'Serviço de troca de óleo' },
        { id: 2, nome: 'Alinhamento', descricao: 'Serviço de alinhamento' },
      ];
      mockServicosService.findAll.mockResolvedValue(mockList);

      const result = await controller.findAll();

      expect(result).toEqual(mockList);
      expect(mockServicosService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('deve retornar o serviço quando encontrado', async () => {
      const mockServico = {
        id: 1,
        nome: 'Troca de óleo',
        descricao: 'Serviço de troca de óleo',
      };
      mockServicosService.findOne.mockResolvedValue(mockServico);

      const result = await controller.findOne(1);

      expect(result).toEqual(mockServico);
      expect(mockServicosService.findOne).toHaveBeenCalledWith(1);
    });

    it('deve propagar NotFoundException quando serviço não encontrado', async () => {
      mockServicosService.findOne.mockRejectedValue(new NotFoundException());

      await expect(controller.findOne(99)).rejects.toThrow(NotFoundException);
    });
  });
});
