import { Module } from '@nestjs/common';
import { companyProviders } from './company.providers';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
@Module({
    providers: [...companyProviders,CompanyService],
    exports: [CompanyService],
    controllers: [CompanyController]
})
export class CompanyModule {}
