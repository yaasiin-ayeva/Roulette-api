import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export default abstract class BaseModel extends BaseEntity {

    @PrimaryGeneratedColumn()
    public _id: string;

    @CreateDateColumn()
    public _createdAt?: Date;

    @UpdateDateColumn()
    public _updatedAt?: Date;

}