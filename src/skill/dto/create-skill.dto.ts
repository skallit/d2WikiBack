import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'The mana cost of the skill',
    minimum: 1,
    default: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  manaCost: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  classesId: number;
}
