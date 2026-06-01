import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Classe } from './entities/classe.entity';
import { CacheInterceptor } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@ApiTags('Classes')
@Controller('classe')
export class ClasseController {
  constructor(private readonly classeService: ClasseService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The classe has been successfully created.',
    type: Classe,
  })
  create(@Body() createClasseDto: CreateClasseDto) {
    return this.classeService.create(createClasseDto);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'The classes has been successfully fetched.',
    type: Classe,
  })
  findAll() {
    return this.classeService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'The classes has been successfully fetched.',
    type: Classe,
  })
  findOne(@Param('id') id: string) {
    return this.classeService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'The classes has been successfully updated.',
    type: Classe,
  })
  update(@Param('id') id: string, @Body() updateClasseDto: UpdateClasseDto) {
    return this.classeService.update(+id, updateClasseDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    description: 'The classes has been successfully deleted.',
    type: Classe,
  })
  remove(@Param('id') id: string) {
    return this.classeService.remove(+id);
  }
}
