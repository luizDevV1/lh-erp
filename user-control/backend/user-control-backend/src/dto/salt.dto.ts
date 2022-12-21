import { Prisma } from '@prisma/client';
import { TBaseEntity } from '~@/dto/shared/base-entity';
import { TAuditFields } from '~@/dto/shared/audit-fields';
import { PartialType } from 'nestjs-mapped-types';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateSaltDto
  implements Prisma.SaltCreateInput, TBaseEntity, TAuditFields
{
  @IsEmpty()
  uuid?: string;
  @IsEmpty()
  salt: string;
  @IsEmpty()
  active = true;
  @IsEmpty()
  create_at?: string | Date;
  @IsEmpty()
  updated_at?: string | Date;
}

@InputType()
export class UpdateSaltDto extends PartialType(CreateSaltDto) {
  @IsString()
  @IsNotEmpty()
  uuid: string;
}
