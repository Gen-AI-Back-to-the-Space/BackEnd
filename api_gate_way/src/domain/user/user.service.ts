import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY_OUTBOUND_PORT,
  UserRepositoryOutboundPort,
} from 'src/ports-adapters/user/user.repository.outbound-port';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_OUTBOUND_PORT)
    private readonly userRepository: UserRepositoryOutboundPort,
  ) {}

  // async register(
  //   userInfo: CreateUserDto,
  // ): Promise<CreateUserOutboundPortOutputDto> {
  //   // TODO: 이메일 중복이 있는지 확인해야하지만, 일단 패스

  //   const user = await this.userRepository.insertUser(userInfo);

  //   return user;
  // }
}
