import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';
import { Team } from './team.entity';
@Controller('team')
export class TeamController {
    constructor(private readonly  teamService : TeamService) { }
    @Post(':company_id')
    async create(@Body() team : TeamDto, @Param('company_id') company_id : string): Promise<Team>{

        return await this.teamService.create({ ...team, "companyId": company_id});
    }
}
