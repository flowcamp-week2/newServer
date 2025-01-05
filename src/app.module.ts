import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommunityModule } from './community/community.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true, //전역에서 환경변수 접근 가능
      envFilePath: '.env', //.env 파일 경로 지정
    }), //환경변수 사용 시. .env파일에 있는 환경변수를 읽어올 때 사용.
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        await typeORMConfig(configService),
    }),    CommunityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
