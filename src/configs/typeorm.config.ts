// import { TypeOrmModuleOptions } from "@nestjs/typeorm";


// console.log("MongoDB Atlas URL:", process.env.MONGODB_ATLAS_URL);
// export const typeORMConfig: TypeOrmModuleOptions = {
//     type: 'mongodb',
//     url: 'mongodb+srv://kminbo214:WMqKpVaEnQyRUg51@cluster0.tog8o.mongodb.net/madweek2?retryWrites=true&w=majority&appName=Cluster0',
//     useUnifiedTopology: true, //recommended for mongodb
//     logging: true, // 로그 활성화
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],
//     synchronize: true, //개발편의상 true. 운영환경이라면 false 권장.
//     autoLoadEntities: true,
// };

import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
    type: 'mongodb',
    url: configService.get<string>('MONGODB_ATLAS_URL'),
    useUnifiedTopology: true,
    logging: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    autoLoadEntities: true,
});
