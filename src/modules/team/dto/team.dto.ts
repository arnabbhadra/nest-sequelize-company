import { IsNotEmpty } from 'class-validator';
export class TeamDto {
  @IsNotEmpty()
  readonly teamLeadName: string;
  @IsNotEmpty()
  readonly companyId: string;
}
