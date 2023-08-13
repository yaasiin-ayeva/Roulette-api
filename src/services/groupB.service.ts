import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { GroupB } from "../entities/groupB.entiy";

export class bGroupService {

    private readonly repository: Repository<GroupB>;

    constructor() {
        this.repository = AppDataSource.getRepository(GroupB);
    }

    async find(data: any) {
        return await this.repository.createQueryBuilder('group_b')
            .where("group_b.one_24 = :one_24", { one_24: data.one_24 })
            .andWhere("group_b.two_24 = :two_24", { two_24: data.two_24 })
            .andWhere("group_b.Curr_3 = :Curr_3", { Curr_3: data.Curr_3 })
            .getManyAndCount();
    }
}