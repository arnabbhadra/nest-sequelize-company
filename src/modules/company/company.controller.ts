import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import { Company } from './company.entity';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../auth/permissions/permissions.decorator';
import { PermissionGuard } from '../auth/permission/permission.guard';
import { READ_PERMISSION, WRITE_PERMISSION } from 'src/core/constants';
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @Permissions(WRITE_PERMISSION)
  @UseGuards(AuthGuard('jwt'), PermissionGuard)
  @Post()
  async create(@Body() company: CompanyDto): Promise<Company> {
    return await this.companyService.create(company);
  }
  @Permissions(READ_PERMISSION)
  @UseGuards(AuthGuard('jwt'), PermissionGuard)
  @Get('all')
  async findAll(): Promise<Company[]> {
    return await this.companyService.findAll();
  }

  @Permissions(READ_PERMISSION)
  @UseGuards(AuthGuard('jwt'), PermissionGuard)
  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string): Promise<Company> {
    return await this.companyService.findOneById(uuid);
  }
  @Permissions(READ_PERMISSION)
  @UseGuards(AuthGuard('jwt'), PermissionGuard)
  @Get()
  async findByName(@Query('name') name: string): Promise<Company[]> {
    return await this.companyService.findByName(name);
  }
}
