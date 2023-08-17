import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Text } from './text.entity';

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(Text)
    private textsRepository: Repository<Text>,
  ) {}

  async create(text: Text){
    await this.textsRepository.save(text);
  }

  async findAll(): Promise<Text[]> {
    return await this.textsRepository.find();
  }


  async remove(id: number): Promise<void> {
    try {
      await this.textsRepository.delete(id);
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
  
}   

