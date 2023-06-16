import { Team } from "src/modules/team/team.entity";

export class CompanyDto {
    readonly companyName: string;
    readonly companyCeo: string;
    readonly companyAddress: string;
    readonly inceptionDate: Date;
}