import { UserEntity } from 'src/config/database/models/user.entity';

export type LocalToken = Pick<UserEntity, 'id' | 'email' | 'name' | 'nickname'>;
