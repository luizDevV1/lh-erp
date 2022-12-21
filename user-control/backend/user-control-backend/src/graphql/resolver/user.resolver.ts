import { Query, Resolver } from '@nestjs/graphql';

@Resolver('user')
export class UserResolver {
  @Query(() => [String], {
    description: 'test',
  })
  public users(): Array<string> {
    return ['TEST', 'TEST_1', 'TEST_2'];
  }
}
