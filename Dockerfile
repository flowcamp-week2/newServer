# Node.js 이미지 선택 (최신 LTS 버전 추천)
FROM node:18

# 작업 디렉터리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 파일 복사
COPY . .

# NestJS 애플리케이션 빌드
RUN npm run build

# 애플리케이션 실행 포트
EXPOSE 3000

# 프로덕션 모드 실행
CMD ["npm", "run", "start:prod"]