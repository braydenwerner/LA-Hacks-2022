import { Field, Float, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User, Item } from './index'

@ObjectType()
@Entity()
export class Favor extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'client_id' })
  client_id!: User

  @Field({ nullable: true })
  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn({ name: 'worker_id' })
  worker_id: User

  @Field()
  @Column()
  @Generated('uuid')
  uuid: string

  @Field()
  @Column()
  title: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string

  @Field(() => Float)
  @Column({ type: 'float' })
  price: number

  @Field()
  @Column()
  status: string

  @Field(() => String, { nullable: true })
  @Column({ type: 'date', nullable: true })
  finish_by: Date

  @Field({ nullable: true })
  @Column({ nullable: true })
  image_url: string

  @Field()
  @Column()
  public: boolean

  @Field()
  @Column()
  food_task: boolean

  @Field()
  @Column()
  grocery_task: boolean

  @Field()
  @Column()
  laundry_task: boolean

  @Field(() => String)
  @CreateDateColumn()
  created_at: Date

  @Field(() => String)
  @UpdateDateColumn()
  updated_at: Date
}
