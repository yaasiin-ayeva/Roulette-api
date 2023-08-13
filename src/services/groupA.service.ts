import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { GroupA } from "../entities/groupA.entiy";

export class aGroupService {

    private readonly repository: Repository<GroupA>;

    constructor() {
        this.repository = AppDataSource.getRepository(GroupA);
    }

    async find(data: any) {
        return await this.repository.createQueryBuilder('group_a')
            .where("group_a.one_24 = :one_24", { one_24: data.one_24 })
            .andWhere("group_a.two_24 = :two_24", { two_24: data.two_24 })
            .andWhere("group_a.Curr_3 = :Curr_3", { Curr_3: data.Curr_3 })
            .getManyAndCount();
    }
}