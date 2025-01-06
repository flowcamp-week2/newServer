import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    //로그인
    async login(user_id: string, password: string){
        const user = await this.userRepository.findOneBy({user_id});
        //실패
        if (!user || user.password !== password){
            return {success: false, message: 'Invalid user_id or password'}
        }
        //성공
        //JWT 토큰 생성 로직 추가 필요!
        const token = 'jwt-token-generated-by-server';
        return {success: true, message: 'Login successful', token};
    }

    //구글 로그인 (나중에 구현)
    async googleLogin(){
        return { success: false, message: 'Google login not implemented yet' };
    }

    //기본 회원가입
    async signUp(userData: {user_id: string, name: string, email: string, password: string, nickname: string, contact?: string}){
        const existingUser = await this.userRepository.findOneBy({
            email: userData.email
        });
        //이미 이메일 존재할 시
        if (existingUser){
            return {success: false, message: 'Email is already in use'};
        }
        //존재하는 이메일 없으면
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return {success: true, message: 'Signup successful. You can now log in.'};
    }

    //내 정보 수정
    async updateUser(updateData: {id: string, user_id: string, name: string, email: string, password: string, nickname: string, contact?: string}){
        const objectId = new ObjectId(updateData.id);
        const user = await this.userRepository.findOneBy({id: objectId});

        //해당 유저 정보 없음
        if (!user){
            return {success: false, message: 'User not found'};
        }

        //업데이트 성공
        Object.assign(user, updateData);
        await this.userRepository.save(user);
        return { success: true, message: 'User information updated successfully' };
    }
}