import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
  ) {}

  create(createSkillDto: CreateSkillDto) {
    const skill: Skill = new Skill();
    skill.name = createSkillDto.name;
    skill.description = createSkillDto.description;
    skill.manaCost = createSkillDto.manaCost;
    skill.classesId = createSkillDto.classesId;
    return this.skillRepository.save(skill);
  }

  findAll(): Promise<Skill[]> {
    return this.skillRepository.find();
  }

  findOne(id: number): Promise<Skill | null> {
    return this.skillRepository.findOneBy({ id });
  }

  update(id: number, updateskillDto: UpdateSkillDto) {
    const skill: Skill = new Skill();
    skill.name = updateskillDto.name;
    skill.description = updateskillDto.description;
    skill.manaCost = updateskillDto.manaCost;
    skill.classesId = updateskillDto.classesId;
    skill.id = id;
    return this.skillRepository.save(skill);
  }

  remove(id: number) {
    return this.skillRepository.delete(id);
  }
}
