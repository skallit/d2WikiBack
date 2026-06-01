import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { ClasseModule } from './classe/classe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import databaseConfig from './config/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule pour les variable env
    ConfigModule.forRoot(),
    UserModule,
    ClasseModule,
    SkillModule,
    // ORM pour connection db autoloading des entité
    TypeOrmModule.forRoot(databaseConfig()),
    // Cache pour mettre en cache les données utilisé beaucoup de fois (reload plus rapide)
    CacheModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
