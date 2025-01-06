import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class User{
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    user_id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    nickname: string;

    @Column({nullable: true})
    contact: string;
}