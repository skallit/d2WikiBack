import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { Class } from './entities/class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [TypeOrmModule.forFeature([Class]), CacheModule.register()],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
