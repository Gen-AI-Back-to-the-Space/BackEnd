import { UserEntity } from 'src/config/database/models/user.entity';

export type FindUserForSignUpOutboundPortOutputDto = Pick<
  UserEntity,
  'id' | 'email' | 'password' | 'name' | 'nickname'
>;
