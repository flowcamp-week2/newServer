import { Body, Controller, Get, Logger, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger = new Logger(AuthController.name);

  //로그인
  @Get('/login')
  async login(@Body() body: {user_id: string, password: string}){
    this.logger.log('login 함수');
    return this.authService.login(body.user_id,  body.password);
  }

  //구글 로그인 페이지로 리다이렉트
  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(){
    this.logger.log('googleLogin 함수');
    //This method will redirect to Google's login page
  }

  //구글 인증 후 리다이렉트된 요청을 처리하고 사용자 데이터를 가져옴 
  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleLoginRedirect(@Req() req){
    console.log('User from Google:', req.user);
    try {
        this.logger.log('Google redirect initiated');
        return this.authService.googleLogin(req.user);
    } catch (error) {
        this.logger.error('Error during Google login redirect', error);
        throw error;
    }
  }

  //기본 회원가입
  @Post('/signup')
  signUp(@Body() userData: { user_id: string; name: string; email: string; password: string; nickname: string; contact?: string }){
    this.logger.log('signUp 함수');
    return this.authService.signUp(userData);
  }

  //내 정보 수정
  @Patch('/mypage')
  updateUser(@Body() userData: { id: string, user_id: string; name: string; email: string; password: string; nickname: string; contact?: string }){
    this.logger.log('updateUser 함수');
    return this.authService.updateUser(userData);
  }
}