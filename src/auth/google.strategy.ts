import { Injectable, Scope } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback} from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/redirect',
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>{
        try {
            console.log('Access Token:', accessToken);
            console.log('Profile:', profile);
            const { id, displayName, emails } = profile;
    
            if (!emails || emails.length === 0) {
                throw new Error('No email found in Google profile');
            }
    
            const user = {
                id,
                displayName,
                email: emails[0].value,
                accessToken,
            };
            done(null, user);
        } catch (error) {
            console.error('Google Strategy validation error:', error);
            done(error, null);
        }    
    }
}