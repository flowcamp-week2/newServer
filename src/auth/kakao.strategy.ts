import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-kakao';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID, // .env 파일에 설정된 카카오 REST API 키
      callbackURL: process.env.KAKAO_CALLBACK_URL, // 리디렉션 URL
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile, done: Function) {
    const { id, username, _json } = profile;

    const user = {
      id, // 카카오 회원 ID
      username, // 카카오 닉네임
      email: _json.kakao_account?.email, // 카카오 이메일
      accessToken, // 액세스 토큰
    };

    done(null, user); // 사용자 정보를 반환
  }
}
