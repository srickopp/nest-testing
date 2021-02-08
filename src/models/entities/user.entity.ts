import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name: "users"})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false
    })
    email: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: true
    })
    password: string;


    @CreateDateColumn({
        type: 'timestamp with time zone',
        nullable: false
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp with time zone',
        nullable: false
    })
    updated_at: Date;

    @DeleteDateColumn({
        type: 'timestamp with time zone',
        nullable: false
    })
    deleted_at: Date;
}

