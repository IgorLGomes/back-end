import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from './blog.service';
import { getModelToken } from '@nestjs/sequelize';
import { Blog } from 'src/models/blog.model';

describe('BlogService', () => {
  let service: BlogService;

  const mockBlogModel = {
    create: jest.fn(),
    update: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BlogService,
        {
          provide: getModelToken(Blog),
          useValue: mockBlogModel,
        },
      ],
    }).compile();

    service = module.get<BlogService>(BlogService);
  });

  it('deve criar post de blog com sucesso!', () => {
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

    mockBlogModel.create.mockResolvedValue(mockPost);

    expect(service.criarPost(postData)).resolves.toEqual(mockPost);
    expect(mockBlogModel.create).toHaveBeenCalledWith(postData);
  });

  it('deve atualizar post de blog com sucesso!', () => {
    const id = 1;

    const updateData = {
      titulo: 'Título atualizado',
      conteudo: 'Conteúdo atualizado',
      dataPublicacao: new Date(),
      urlImagem: 'http://example.com/update',
    };

    const mockPost = {
      id: 1,
      ...updateData,
    };

    mockBlogModel.update.mockResolvedValue([1]);

    expect(service.atualizarPost(id, updateData)).resolves.toEqual([1]);
    expect(mockBlogModel.update).toHaveBeenCalledWith(updateData, { where: { id } });
  });
});
