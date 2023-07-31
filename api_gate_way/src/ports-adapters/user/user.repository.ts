import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { UserRepositoryOutboundPort } from './user.repository.outbound-port';

@Injectable()
export class UserRepository implements UserRepositoryOutboundPort {
  constructor(private readonly prisma: PrismaService) {}
  // async insertUser(
  //   userInfo: CreateUserDto,
  // ): Promise<CreateUserOutboundPortOutputDto> {
  //   const { password, ...data } = userInfo;

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   const user = await this.prisma.user.create({
  //     select:
  //       typia.random<TypeToSelect<CreateUserOutboundPortOutputDtoForSelect>>(),
  //     data: {
  //       ...data,
  //       password: hashedPassword,
  //     },
  //   });

  //   return dateToString(user);
  // }

  // async findUserForSignUp(email: string): Promise<FindUserForSignUpOutboundPortOutputDto> {

  // }
}
