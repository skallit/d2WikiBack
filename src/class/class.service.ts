import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
  ) {}

  create(createClassDto: CreateClassDto) {
    const classConst: Class = new Class();
    classConst.name = createClassDto.name;
    classConst.description = createClassDto.description;
    classConst.image = createClassDto.image;
    return this.classRepository.save(classConst);
  }

  findAll(): Promise<Class[]> {
    return this.classRepository.find();
  }

  findOne(id: number): Promise<Class | null> {
    return this.classRepository.findOneBy({ id });
  }

  update(id: number, updateclassDto: UpdateClassDto) {
    const classConst: Class = new Class();
    classConst.name = updateclassDto.name;
    classConst.description = updateclassDto.description;
    classConst.image = updateclassDto.image;
    classConst.id = id;
    return this.classRepository.save(classConst);
  }

  remove(id: number) {
    return this.classRepository.delete(id);
  }
}
