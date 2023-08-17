import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextModule } from './texts/text.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'example2',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
    
  },
  ),
TextModule,
SwaggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
