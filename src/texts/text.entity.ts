import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Text {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({
        length: 128,
        nullable: false,
    })
    value: string

}

