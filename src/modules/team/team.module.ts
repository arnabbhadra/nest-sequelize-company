import { Module } from '@nestjs/common';
import {teamsProviders} from "./team.providers";
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
@Module({ 
    providers: [...teamsProviders, TeamService],
    exports: [ TeamService],
    controllers: [TeamController]
})
export class TeamModule {}
