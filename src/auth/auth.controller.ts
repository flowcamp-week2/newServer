import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger = new Logger(AuthController.name);

  //로그인
  @Get('/login')
  login(@Body() body: {user_id: string, password: string}){
    this.logger.log('login 함수');
    return this.authService.login(body.user_id, body.password);
  }

  //구글 로그인(나중에 구현)
  @Get('/google')
  googleLogin(){
    this.logger.log('googleLogin 함수');
    return this.authService.googleLogin();
  }

  //기본 회원가입
  @Post('/signup')
  signUp(@Body() body: {user_id: string, name: string, email: string, password: string, nickname: string, contact?: string}){
    this.logger.log('signUp 함수');
    return this.authService.signUp(body);
  }

  //내 정보 수정
  @Post('/mypage')
  updateUser(@Body() body: {id: string, user_id: string, name: string, email: string, password: string, nickname: string, contact?: string}){
    this.logger.log('updateUser 함수');
    return this.authService.updateUser(body);
  }
}