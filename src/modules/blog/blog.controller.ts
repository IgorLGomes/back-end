import { Body, Controller, Logger, Param, Patch, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogCreateDto } from './dto/blog-create.dto';
import { BlogUpdateDto } from './dto/blog-update.dto';

@Controller('blog')
export class BlogController {
  private readonly logger = new Logger(BlogController.name);
  
  constructor(private readonly blogService: BlogService) {}

  @Post()
  criarPost(@Body() blogDto: BlogCreateDto) {
    this.logger.log('Iniciando criação de post no blog...');
    return this.blogService.criarPost(blogDto);
  }

  @Patch(':id')
  async atualizarPost(
    @Param('id') id: number,
    @Body() blogDto: BlogCreateDto  
  ) {
    this.logger.log(`Iniciando atualização do post com ID ${id}...`);
    
    return this.blogService.atualizarPost(id, blogDto); 
  }
}