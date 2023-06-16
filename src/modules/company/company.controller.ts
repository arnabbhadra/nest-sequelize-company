import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import { Company } from './company.entity';
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService : CompanyService) { }

    @Post()
    async create(@Body() company : CompanyDto): Promise<Company>{
        return await this.companyService.create(company);
    }

    @Get('uuid')
    async findOne( @Param('uuid') uuid: string): Promise<Company>{
        return await this.companyService.findOneById(uuid);
    }
}
