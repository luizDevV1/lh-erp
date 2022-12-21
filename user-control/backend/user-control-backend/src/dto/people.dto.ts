import { Prisma } from '@prisma/client';
import { TBaseEntity } from '~@/dto/shared/base-entity';
import { TAuditFields } from '~@/dto/shared/audit-fields';
import { PartialType } from 'nestjs-mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { InputType } from '@nestjs/graphql';

// Todo: Gerar as validações
@InputType()
export class CreatePeopleDto
  implements Prisma.PeopleCreateInput, TBaseEntity, TAuditFields
{
  uuid?: string;
  fistname: string;
  lastname: string;
  cpf: string;
  observation?: string;
  birhday: string | Date;
  User?: unknown;
  create_at?: string | Date;
  updated_at?: string | Date;
  active = true;
}

@InputType()
export class UpdatePeopleDto extends PartialType(CreatePeopleDto) {
  @IsString()
  @IsNotEmpty()
  uuid: string;
}
