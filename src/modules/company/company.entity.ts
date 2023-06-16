import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { Team } from '../team/team.entity';
@Table
export class Company extends Model<Company> {
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
  companyName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  companyCeo: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  companyAddress: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  inceptionDate: Date;

  @HasMany(() => Team)
  teams: Team[];

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
