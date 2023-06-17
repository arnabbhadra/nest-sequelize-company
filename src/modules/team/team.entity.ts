import {
  Table,
  PrimaryKey,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { Company } from '../company/company.entity';
@Table
export class Team extends Model<Team> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  uuid: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  teamLeadName: string;

  @ForeignKey(() => Company)
  @Column(DataType.UUID)
  companyId: string;

  @BelongsTo(() => Company)
  company: Company;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
