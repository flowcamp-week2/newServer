import { BadRequestException, Injectable, Logger } from '@nestjs/common';
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

      private readonly logger = new Logger(AuthService.name);

    //로그인
    async login(user_id: string, password: string){
        this.logger.log('login 함수 in authService');
        console.log('login 함수 in authService');
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
        console.log(user);
        this.logger.log('user:', user);
        return {success: true, message: 'Login successful!!', token, user_id: user.user_id, name: user.name, email: user.email, nickname: user.nickname, contact: user.contact};
    }

    // async googleLogin(user: any) {
    //     try {
    //         console.log('Google Login User:', user);
    
    //         if (!user) {
    //             throw new Error('No user object received');
    //         }
    
    //         // 사용자 이메일로 계정 찾기
    //         let existingUser = await this.userRepository.findOneBy({ email: user.email });
    //         console.log('Existing User:', existingUser);
    
    //         // 새 사용자 생성
    //         if (!existingUser) {
    //             existingUser = await this.userRepository.create({
    //                 user_id: user.id,
    //                 name: user.displayName,
    //                 email: user.email,
    //                 password: '', // 구글 로그인은 비밀번호 필요 없음
    //                 nickname: user.displayName,
    //             });
    //             await this.userRepository.save(existingUser);
    //         }
    
    //         // JWT 토큰 생성
    //         const token = await this.jwtService.sign({ user_id: existingUser.user_id, id: existingUser.id });
    //         return { success: true, message: 'Google login successful', token };
    //     } catch (error) {
    //         console.error('Google Login Error:', error);
    //         return { success: false, message: 'Google login failed', error: error.message };
    //     }
    // }
    

      // 카카오 로그인 처리
    async kakaoLogin(user: any) {
        try {
        // 사용자 정보가 이미 데이터베이스에 있는지 확인
        let existingUser = await this.findUserByEmail(user.email);

        // 사용자 정보가 없으면 새로 생성
        if (!existingUser) {
            existingUser = await this.createUser({
            id: user.id,
            name: user.username,
            email: user.email
            });
        }

        // JWT 토큰 생성
        const token = this.jwtService.sign({ userId: existingUser.id, email: existingUser.email });
          return { success: true, message: 'Kakao login successful', token };
        } catch (error) {
        console.error('Kakao Login Error:', error);
        throw new Error('Failed to login with Kakao');
        }  
    }

    async findUserByEmail(email: string) {
        try {
            // 이메일로 사용자 검색
            const user = await this.userRepository.findOneBy({ email });
            return user; // 사용자 객체 반환
        } catch (error) {
            console.error('Error finding user by email:', error);
            throw new Error('Failed to find user by email');
        }
    }
    
    async createUser(userData: { id: string; name: string; email: string; nickname?: string; }) {
        try {
            // 새로운 사용자 생성
            const newUser = this.userRepository.create({
                user_id: userData.id,
                name: userData.name,
                email: userData.email,
                nickname: userData.nickname || userData.name, // 닉네임이 없으면 이름 사용
                password: '', // 카카오 로그인은 비밀번호가 필요하지 않음
            });
    
            // 데이터베이스에 저장
            const savedUser = await this.userRepository.save(newUser);
            return savedUser; // 저장된 사용자 객체 반환
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Failed to create user');
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

        const updateUserId = await updateData.user_id;
        const user = await this.userRepository.findOneBy({user_id: updateUserId});

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