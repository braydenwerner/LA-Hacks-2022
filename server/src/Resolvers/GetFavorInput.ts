import { Field, InputType } from 'type-graphql'

@InputType()
export class GetFavorInput {
  @Field({ nullable: true })
  minPrice: number

  @Field({ nullable: true })
  maxPrice: number

  @Field({ nullable: true })
  status: string

  @Field({ nullable: true })
  public: boolean

  @Field({ nullable: true })
  foodTask: boolean

  @Field({ nullable: true })
  groceryTask: boolean

  @Field({ nullable: true })
  laundryTask: boolean

  @Field()
  pageSize: number

  @Field()
  pageNumber: number
}
