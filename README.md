# 티켓피커

## 티켓팅 무조건 성공하려면?? 티켓피커!

## 기획

![5yq9fwhg2o7x6oc1.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/3b87bd89-2b45-429d-b683-e33dfa0082de/5yq9fwhg2o7x6oc1.webp)

### 프로젝트를 시작하면서… 나에게는 고민이 하나 생겼다..(개큰고민)

1월 8일 오후 7시.. 발표 두시간 전.. 좋아하는 가수의 콘서트 티켓팅 일정이 잡힌 것…!

어떡하지……?

### …아 티켓팅 도와주는 사이트를 만들면 되겠다!!!!!!

### 티켓피커는 콘서트, 뮤지컬/연극, 전시 등 모든 공연들의 정보를 제공하고, 사람들과 공유하고 이야기할 수 있는 커뮤니티 플랫폼입니다. 서버시간과 티켓팅 연습 게임을 제공합니다.

## Team & 개발 환경

<aside>
<img src="/icons/computer_blue.svg" alt="/icons/computer_blue.svg" width="40px" />

FE: 최준명

- Language: Typescript
- Framework: Svelte
</aside>

<aside>
<img src="/icons/server_blue.svg" alt="/icons/server_blue.svg" width="40px" />

BE: 김보민

- Language: Typescript
- Framework: NestJS
</aside>

<aside>
<img src="/icons/gear_blue.svg" alt="/icons/gear_blue.svg" width="40px" />

- Server: GCP(Google Cloud Platform)
- Database: MongoDB
- SDK: Kakao login API
</aside>

## APIs

[madcamp_week2_api 17068b85547a8057ac56ebfd1225fb0a.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/9834e46f-86ec-4984-bb1b-cfb2c1cfad96/madcamp_week2_api_17068b85547a8057ac56ebfd1225fb0a.pdf)

## DB diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/d2d548a2-7e5c-4756-b8f7-cc1f6fd45e5c/image.png)

https://dbdiagram.io/d/madcamp_week2-6777efad5406798ef734f294

## 서비스

### 홈  화면

![스크린샷 2025-01-08 오후 6.17.05.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/ed96ef21-15ca-4e27-bcf4-c81b24cd6c33/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.17.05.png)

![스크린샷 2025-01-08 오후 6.17.46.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/efc21d33-ccb7-4f18-b935-796d3d429a1a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.17.46.png)

![스크린샷 2025-01-08 오후 6.18.11.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/7bb9ae67-f8bf-467e-9c0d-198c9c3b29cb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.18.11.png)

- 콘서트, 뮤지컬/연극, 전시 정보
- 최신 커뮤니티 글

### 로그인/회원가입

![스크린샷 2025-01-08 오후 6.19.09.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/a11d556c-655e-447d-aaf5-9f42c77c595f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.19.09.png)

![스크린샷 2025-01-08 오후 6.19.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/c9c0f8b7-0a15-4c64-b8d5-a9367d1e7df1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.19.35.png)

- 일반로그인
- 카카오 로그인
- 회원가입

### 공연 정보

![스크린샷 2025-01-08 오후 6.20.08.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/0fcad318-d74a-4247-9cf7-afb99d7d2e28/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.20.08.png)

![스크린샷 2025-01-08 오후 6.21.46.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/59cb0056-c7f3-4477-97a9-c4c63d7bd679/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.21.46.png)

- 공연 날짜, 티켓팅 날짜 등 필요한 정보

### 커뮤니티

![스크린샷 2025-01-08 오후 8.32.02.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/944d6b66-53f4-43dc-a510-144f66986564/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.32.02.png)

![스크린샷 2025-01-08 오후 8.32.34.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/92451280-660e-4dbd-8071-2d4cbae03f63/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.32.34.png)

- 잡담, 정보, 후기 글

### 서버 시간

![스크린샷 2025-01-08 오후 6.23.18.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/a3e5870d-3beb-4743-ae42-7a868999b998/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.23.18.png)

![스크린샷 2025-01-08 오후 8.06.27.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/6d485879-4b79-439c-b433-1dc1b3eaa839/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.06.27.png)

- 여러 티켓팅 사이트의 서버시간을 제공함
- 티켓팅할 때 띄워놓을 수 있는 팝업화면

![1000032727.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/e8460ca8-1571-4143-a253-8996aa0679e3/1000032727.jpg)

실제 사용 예시

### 모의 티켓팅

[화면 기록 2025-01-08 오후 7.58.15.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/0daf1e26-f486-4bac-894e-012f2bebe730/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.58.15.mov)

- 버튼 클릭 속도에 따른 대기자 수 구현
- 포도알 구현
- 실전과 유사한 연습으로 티켓팅 실력 증진

## 티켓팅 결과

![스크린샷 2025-01-08 오후 7.43.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/656043ce-da79-4f50-a507-3fcabbb8b855/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-01-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.43.48.png)

무한로딩 억까로 인해 개같이 실패

## 후기

김보민

- DB 연결 & 서버 연결 & 프론트 연결 등 뭐 하나 한 번에 잘 되는 게 없어서 힘들었다…
- 그럼에도 내가 못하는 걸 기다려주고 여러 문제를 같이 해결해준 팀원에게 감사…
- 복잡한 서비스를 기획하지 말자는 교훈을 얻었다

최준명

- 웹 개발도 프론트도 다 처음인데, 좋은 짝꿍 만나서 재밌게 개발한 것 같다.
- 스벨트 개발해주신 Rich Harris님께 감사드린다.
- 억울하다. 난 진짜 빨리 클릭했다.
