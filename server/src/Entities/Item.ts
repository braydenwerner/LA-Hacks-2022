import { Field, Float, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Item extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  title: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string

  @Field(() => Float)
  @Column({ type: 'float' })
  price: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  image_url: string
}
