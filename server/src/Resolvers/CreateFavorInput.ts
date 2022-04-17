import { Field, InputType } from 'type-graphql'
import { User } from '../Entities'

@InputType()
export class CreateFavorInput {
  @Field()
  title: string

  @Field()
  description: string

  @Field()
  price: number

  @Field()
  status: string

  @Field({ nullable: true })
  finish_by?: Date

  @Field({ nullable: true })
  image_url?: string

  @Field()
  public: boolean

  @Field()
  food_task: boolean

  @Field()
  grocery_task: boolean

  @Field()
  laundry_task: boolean
}
