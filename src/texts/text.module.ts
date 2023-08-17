import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Text } from './text.entity';
import { TextController } from './text.controller';
import { TextService } from './text.service';

@Module({
  imports: [TypeOrmModule.forFeature([Text])],
  controllers: [TextController],
  exports: [TextService],
  providers: [TextService]
})
export class TextModule {}