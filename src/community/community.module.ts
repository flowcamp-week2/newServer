import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Reply } from './reply.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts, Reply])
  ],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
