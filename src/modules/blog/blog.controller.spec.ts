import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogUpdateDto } from './dto/blog-update.dto';

describe('BlogController', () => {
  let controller: BlogController;

  const mockBlogService = {
    criarPost: jest.fn(),
    atualizarPost: jest.fn(), // ADICIONADO: estava faltando
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [
        {
          provide: BlogService,
          useValue: mockBlogService,
        },
      ],
    }).compile();

    controller = module.get<BlogController>(BlogController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve criar post de blog com sucesso!', async () => {
    const postData = {
      titulo: 'Título do Post',
      conteudo: 'Conteúdo do post',
      dataPublicacao: new Date(),
      urlImagem: 'http://example.com/post',
    };

    const mockPost = {
      id: 1,
      ...postData,
    };

    mockBlogService.criarPost.mockResolvedValue(mockPost);

    const result = await controller.criarPost(postData);
    
    expect(result).toEqual(mockPost);
    expect(mockBlogService.criarPost).toHaveBeenCalledWith(postData);
    expect(mockBlogService.criarPost).toHaveBeenCalledTimes(1);
  });

it('deve atualizar post de blog com sucesso!', async () => {
    // Arrange
    const id = '1';
    const updateData: BlogUpdateDto = {
      titulo: 'Título atualizado',
      conteudo: 'Conteúdo atualizado',
    };

    const mockUpdatedPost = {
      id: 1,
      titulo: 'Título atualizado',
      conteudo: 'Conteúdo atualizado',
      dataPublicacao: new Date(),
      urlImagem: 'http://example.com/update',
    };

    // CORREÇÃO: usar atualizarPost em vez de updateData
    mockBlogService.atualizarPost.mockResolvedValue(mockUpdatedPost);

    // Act
    const result = await controller.atualizarPost(Number(id), updateData);

    // Assert
    expect(result).toEqual(mockUpdatedPost);
    expect(mockBlogService.atualizarPost).toHaveBeenCalledWith(Number(id), updateData);
    expect(mockBlogService.atualizarPost).toHaveBeenCalledTimes(1);
  });
});