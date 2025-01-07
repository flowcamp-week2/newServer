import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ){}

    //로그인
    async login(user_id: string, password: string){
        const user = await this.userRepository.findOneBy({user_id});
        //실패
        if (!user){
            return {success: false, message: 'Invalid user_id'}
        }
        else if (user.password !== password){
            return {success: false, message: 'Invalid password'}
        }
        //성공
        //JWT 토큰 생성 로직 
        const token = this.jwtService.sign({user_id: user.user_id, id: user.id});
        return {success: true, message: 'Login successful', token};
    }

    async googleLogin(user: any) {
        try {
            console.log('Google Login User:', user);
    
            if (!user) {
                throw new Error('No user object received');
            }
    
            // 사용자 이메일로 계정 찾기
            let existingUser = await this.userRepository.findOneBy({ email: user.email });
            console.log('Existing User:', existingUser);
    
            // 새 사용자 생성
            if (!existingUser) {
                existingUser = await this.userRepository.create({
                    user_id: user.id,
                    name: user.displayName,
                    email: user.email,
                    password: '', // 구글 로그인은 비밀번호 필요 없음
                    nickname: user.displayName,
                });
                await this.userRepository.save(existingUser);
            }
    
            // JWT 토큰 생성
            const token = await this.jwtService.sign({ user_id: existingUser.user_id, id: existingUser.id });
            return { success: true, message: 'Google login successful', token };
        } catch (error) {
            console.error('Google Login Error:', error);
            return { success: false, message: 'Google login failed', error: error.message };
        }
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
        const newUser = await this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return {success: true, message: 'Signup successful. You can now log in.'};
    }

    //내 정보 수정
    async updateUser(updateData: {user_id: string, name: string, email: string, password: string, nickname: string, contact?: string}){
        // if (!ObjectId.isValid(updateData.id)) {
        //     throw new BadRequestException('Invalid user ID format');
        // }

        // const objectId = await new ObjectId(updateData.id);
        // const user = await this.userRepository.findOneBy({id: objectId});

        const updateUserId = await new ObjectId(updateData.user_id);
        const user = await this.userRepository.findOneBy({id: updateUserId});

        //해당 유저 정보 없음
        if (!user){
            return {success: false, message: 'User not found'};
        }

        //업데이트 성공
        if (updateData.name) user.name = updateData.name;
        if (updateData.email) user.email = updateData.email;
        if (updateData.password) user.password = updateData.password;
        if (updateData.nickname) user.nickname = updateData.nickname;
        if (updateData.contact) user.contact = updateData.contact;
                
        await this.userRepository.save(user);
        return { success: true, message: 'User information updated successfully' };
    }
}