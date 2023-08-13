import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity("group_a")
export class GroupA {
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