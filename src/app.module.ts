import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { ClassModule } from './class/class.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Class } from './class/entities/class.entity';
import { Skill } from './skill/entities/skill.entity';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    UserModule,
    ClassModule,
    SkillModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'diabloWikiDB',
      entities: [User, Class, Skill],
      synchronize: true,
    }),
    CacheModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
