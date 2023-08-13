import { Entity, PrimaryGeneratedColumn, Column, Index, BaseEntity } from 'typeorm';

@Entity()
@Index('idx_one_24', ['one24'])
@Index('idx_two_24', ['two24'])
@Index('idx_curr_3', ['curr3'])
@Index('idx_target', ['target'])

export default abstract class DataEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

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
