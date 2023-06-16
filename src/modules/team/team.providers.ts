import { Team } from "./team.entity";
import { TEAM_REPOSITORY } from '../../core/constants';

export const teamsProviders = [
  {
    provide: TEAM_REPOSITORY,
    useValue: Team,
  },
];