import { Injectable } from '@nestjs/common';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';
import { Classe } from './entities/classe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClasseService {
  constructor(
    @InjectRepository(Classe)
    private readonly classeRepository: Repository<Classe>,
  ) {}

  create(createClasseDto: CreateClasseDto) {
    const classe: Classe = new Classe();
    classe.name = createClasseDto.name;
    classe.description = createClasseDto.description;
    classe.image = createClasseDto.image;
    return this.classeRepository.save(classe);
  }

  findAll(): Promise<Classe[]> {
    return this.classeRepository.find();
  }

  findOne(id: number): Promise<Classe | null> {
    return this.classeRepository.findOneBy({ id });
  }

  update(id: number, updateclasseDto: UpdateClasseDto) {
    const classe: Classe = new Classe();
    classe.name = updateclasseDto.name;
    classe.description = updateclasseDto.description;
    classe.image = updateclasseDto.image;
    classe.id = id;
    return this.classeRepository.save(classe);
  }

  remove(id: number) {
    return this.classeRepository.delete(id);
  }
}
