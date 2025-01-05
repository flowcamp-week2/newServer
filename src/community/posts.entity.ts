import { ObjectId } from "mongodb";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts{
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    title: string;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    content: string;

    @Column()
    photos: string[];

    @Column()
    tags: string[];

    @Column()
    category:string; // chats or infos or comments
}