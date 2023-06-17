import { IsDate, IsNotEmpty } from 'class-validator';

export class CompanyDto {
  @IsNotEmpty()
  readonly companyName: string;
  @IsNotEmpty()
  readonly companyCeo: string;
  @IsNotEmpty()
  readonly companyAddress: string;
  @IsNotEmpty()
  @IsDate()
  readonly inceptionDate: Date;
}
