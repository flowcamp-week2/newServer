import { ObjectId } from "mongodb";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reply } from "./reply.entity";

@Entity()
export class Posts{
    @ObjectIdColumn({name: '_id'})
    id: ObjectId;

    @Column()
    title: string;

    //이것도 토큰 설정 이후에 수정해야함! 유저 아이디 자동으로 들어가도록.
    @Column({nullable: true})
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @Column({nullable: true})
    content: string;

    @Column({nullable: true})
    photos: string[];

    @Column({nullable: true})
    tags: string[];

    @Column()
    category:string; // chats or infos or comments

    @OneToMany(()=> Reply, reply => reply.posts, {eager: true, cascade: true, nullable: true})
    replies: Reply[];
}