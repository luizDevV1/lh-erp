import { InputType } from '@nestjs/graphql';
import { PartialType } from 'nestjs-mapped-types';
import { Prisma } from '@prisma/client';
import { TBaseEntity } from '~@/dto/shared/base-entity';
import { TAuditFields } from '~@/dto/shared/audit-fields';
import { IsNotEmpty, IsString } from 'class-validator';

// Todo: Gerar as validações
@InputType()
export class CreateUserDto
  implements Prisma.UserCreateInput, TBaseEntity, TAuditFields
{
  uuid?: string;
  email: string;
  username: string;
  password: string;
  salt: unknown;
  people?: unknown;
  create_at?: string | Date;
  updated_at?: string | Date;
  active = true;
}

/**
 * Toda vez que essa clase for chama se ouver troca de senha ela deve gerar um novo salt
 */
@InputType()
export class UpdatedUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  uuid: string;
}
