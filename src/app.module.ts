import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { ClassModule } from './class/class.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ClassModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
