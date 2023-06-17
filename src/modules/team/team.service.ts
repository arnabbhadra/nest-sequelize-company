import { Injectable, Inject } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamDto } from './dto/team.dto';
import { TEAM_REPOSITORY } from 'src/core/constants';

@Injectable()
export class TeamService {
  constructor(
    @Inject(TEAM_REPOSITORY) private readonly teamRepository: typeof Team,
  ) {}
  async create(team: TeamDto): Promise<Team> {
    return await this.teamRepository.create<Team>(team);
  }
}
