import { UserEntity } from 'src/config/database/models/user.entity';

export type CreateUserDto = Pick<
  UserEntity,
  'email' | 'password' | 'name' | 'nickname'
>;

export type CreateUserOutboundPortOutputDto = Pick<
  UserEntity,
  'id' | 'email' | 'password' | 'name' | 'nickname' | 'createdAt'
>;

export type CreateUserOutboundPortOutputDtoForSelect = {
  [P in keyof CreateUserOutboundPortOutputDto as `${P}`]: CreateUserOutboundPortOutputDto[P];
};
