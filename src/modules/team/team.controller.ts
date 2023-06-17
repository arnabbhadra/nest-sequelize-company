import { Controller, Post, Param, Body, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';
import { Team } from './team.entity';
import { READ_PERMISSION } from 'src/core/constants';
import { PermissionGuard } from '../auth/permission/permission.guard';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../auth/permissions/permissions.decorator';
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
  @Permissions(READ_PERMISSION)
  @UseGuards(AuthGuard('jwt'), PermissionGuard)
  @Post(':company_id')
  async create(
    @Body() team: TeamDto,
    @Param('company_id') company_id: string,
  ): Promise<{data: Team}> {
    const newTeam = await this.teamService.create({ ...team, companyId: company_id });
    return {data: newTeam}
  }
}
