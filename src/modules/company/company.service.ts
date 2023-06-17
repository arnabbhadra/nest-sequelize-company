import { Injectable, Inject } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyDto } from './dto/company.dto';
import { COMPANY_REPOSITORY } from '../../core/constants';
import { Team } from '../team/team.entity';

import { Op } from 'sequelize';
@Injectable()
export class CompanyService {
  constructor(
    @Inject(COMPANY_REPOSITORY)
    private readonly companyRepository: typeof Company,
  ) {}

  async create(company: CompanyDto): Promise<Company> {
    return await this.companyRepository.create<Company>(company);
  }

  async findOneById(uuid: string): Promise<Company> {
    return await this.companyRepository.findOne<Company>({
      where: { uuid },
      include: [Team],
    });
  }
  async findByName(name: string): Promise<Company[]> {
    return await this.companyRepository.findAll<Company>({
      where: { companyName: { [Op.iLike]: `%${name}%` } },
    });
  }
  async findAll(): Promise<Company[]> {
    return await this.companyRepository.findAll<Company>({ include: [Team] });
  }
}
