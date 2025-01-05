import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { CommunityService } from './community.service';
import { Posts } from './posts.entity';

@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  private readonly logger = new Logger(CommunityController.name);


  //잡담글 전체 불러오기
  @Get('/chats')
  getPostChats(){
    this.logger.log('getPostChats 함수');
    return this.communityService.getPostChats();
  }

  //정보글 전체 불러오기
  @Get('/infos')
  getPostInfos(){
    this.logger.log('getPostInfos 함수');
    return this.communityService.getPostInfos();
  }

  //후기글 전체 불러오기
  @Get('/comments')
  getPostComments(){
    this.logger.log('getPostComments 함수');
    return this.communityService.getPostComments();
  }

  //글 작성
  @Post('/newpost')
  createPost(@Body() post: Partial<Posts>){
    this.logger.log('createPost 함수');
    return this.communityService.createPost(post);
  }

  //상세글 보기
  @Get('/:postId')
  findPostById(@Param('postId') postId: string){
    this.logger.log('findPostById 함수');
    return this.communityService.findPostById(postId);
  }

/*
  //댓글 작성
  @Post('/:postId/comment')
  createReply(){
    return this.communityService.createReply(); 
  }*/
}
