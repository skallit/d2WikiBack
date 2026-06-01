import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';
import { Classe } from './entities/classe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [TypeOrmModule.forFeature([Classe]), CacheModule.register()],
  controllers: [ClasseController],
  providers: [ClasseService],
})
export class ClasseModule {}
