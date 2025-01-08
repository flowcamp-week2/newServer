import { IntegerType, ObjectId } from "mongodb";
import { Column, CreateDateColumn, Entity, ManyToOne, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./posts.entity";
import internal from "stream";

@Entity()
export class Reply{
    @ObjectIdColumn()
    id: ObjectId;

    @ManyToOne(() => Posts, posts => posts.replies, {onDelete: 'CASCADE'})
    posts: Posts;

    //many to one 관계 설정 & user 만들어야 함. 그러려면 auth 토큰 어쩌구 해야 함.
    //따라서 일단 string으로 만들어놓자!...? 가 아니라 그냥 nullable 로 만들어놓자.
    @Column({nullable: true})
    user_nickname: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;
}