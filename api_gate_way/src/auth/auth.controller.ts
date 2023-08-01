// import { Controller, UseGuards } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { User } from 'src/middlewares/decorators/user.decorator';
// import { TypedBody, TypedRoute } from '@nestia/core';
// import { LocalAuthGuard } from './guards/local-auth.guard';

// @Controller('/api/v1/auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @UseGuards(LocalAuthGuard)
//   @TypedRoute.Post('sign-in')
//   async localSignIn(
//     @User() user: FindUserInfoOutboundPortOutputDto,
//     @TypedBody() body: LogInUserDto,
//   ): Promise<IAccessTokenReturn> {
//     const token = await this.authService.issueTokenForLocalSignIn(user);

//     return token;
//   }
// }
