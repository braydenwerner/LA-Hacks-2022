import { Field, Float, InputType } from 'type-graphql'
import { User } from '../Entities'

@InputType()
export class UpdateFavorInput {
  @Field()
  uuid: string

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field(() => Float, { nullable: true })
  price?: number

  @Field({ nullable: true })
  status?: string

  @Field({ nullable: true })
  finish_by?: string

  @Field({ nullable: true })
  image_url?: string

  @Field({ nullable: true })
  public?: boolean

  @Field({ nullable: true })
  food_task?: boolean

  @Field({ nullable: true })
  grocery_task?: boolean

  @Field({ nullable: true })
  laundry_task?: boolean
}
