import { PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import BaseModel from './base.entity';

export default abstract class DataEntity extends BaseModel {

    @Column({ name: 'one_24' })
    @Index()
    one24: number;

    @Column({ name: 'two_24' })
    @Index()
    two24: number;

    @Column({ name: 'Curr_3' })
    @Index()
    curr3: number;

    @Column({ name: 'Target' })
    @Index()
    target: number;
}
