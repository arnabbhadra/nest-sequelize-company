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
      attributes: [
        'uuid',
        'companyName',
        'companyCeo',
        'companyAddress',
        'inceptionDate',
      ],
    });
  }
  async findByName(name: string): Promise<Company[]> {
    return await this.companyRepository.findAll<Company>({
      where: { companyName: { [Op.iLike]: `%${name}%` } },
      attributes: [
        'uuid',
        'companyName',
        'companyCeo',
        'companyAddress',
        'inceptionDate',
      ],
    });
  }
  async findAll(): Promise<Company[]> {
    return await this.companyRepository.findAll<Company>({
      include: {
        model: Team,
        as: 'teams',
        attributes: ['uuid', 'teamLeadName'],
      },
      attributes: [
        'uuid',
        'companyName',
        'companyCeo',
        'companyAddress',
        'inceptionDate',
      ],
    });
  }
}
