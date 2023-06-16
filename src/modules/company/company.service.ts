import { Injectable, Inject } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyDto } from './dto/company.dto';
import { COMPANY_REPOSITORY } from '../../core/constants';

@Injectable()
export class CompanyService {

    constructor(@Inject(COMPANY_REPOSITORY) private readonly companyRepository: typeof Company) { }

    async create(company: CompanyDto): Promise<Company> {
        return await this.companyRepository.create<Company>(company);
    }


    async findOneById(uuid: string): Promise<Company> {
        return await this.companyRepository.findOne<Company>({ where: { uuid } });
    }
}