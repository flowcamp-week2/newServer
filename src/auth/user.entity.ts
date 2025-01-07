import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class User{
    @ObjectIdColumn()
    id: ObjectId;

    @Column({unique: true})
    user_id: string;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column({nullable: true})
    password: string;

    @Column({nullable: true})
    nickname: string;

    @Column({nullable: true})
    contact: string;
}