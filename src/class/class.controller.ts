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
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Class } from './entities/class.entity';
import { CacheInterceptor } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@ApiTags('Classes')
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The classe has been successfully created.',
    type: Class,
  })
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'The classes has been successfully fetched.',
    type: Class,
  })
  findAll() {
    return this.classService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'The classes has been successfully fetched.',
    type: Class,
  })
  findOne(@Param('id') id: string) {
    return this.classService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'The classes has been successfully updated.',
    type: Class,
  })
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    description: 'The classes has been successfully deleted.',
    type: Class,
  })
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
