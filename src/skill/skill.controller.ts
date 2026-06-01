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
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Skill } from './entities/skill.entity';
import { CacheInterceptor } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@ApiTags('Skills')
@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The skill has been successfully created.',
    type: Skill,
  })
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'The skills has been successfully fetched.',
    type: Skill,
  })
  findAll() {
    return this.skillService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'The skill has been successfully fetched.',
    type: Skill,
  })
  findOne(@Param('id') id: string) {
    return this.skillService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'The skills has been successfully updated.',
    type: Skill,
  })
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    description: 'The skills has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.skillService.remove(+id);
  }
}
