import { Resolver, Query, Arg, Mutation, Ctx } from 'type-graphql'
import { createQueryBuilder } from 'typeorm'

import { Favor, User } from '../Entities'
import { MyContext } from '../types'
import { getUserId } from '../utils'
import { CreateFavorInput } from './CreateFavorInput'
import { GetFavorInput } from './GetFavorInput'
import { UpdateFavorInput } from './UpdateFavorInput'

@Resolver()
export class FavorResolver {
  @Query(() => Favor, { nullable: true })
  getFavorByUUID(@Arg('uuid') uuid: string) {
    return Favor.findOne({
      where: { uuid },
    })
  }

  @Query(() => [Favor], { nullable: true })
  async getFavors(@Arg('input', { nullable: true }) q: GetFavorInput) {
    //  if no input filters, just return everything
    if (!q) return Favor.find({ relations: ['client_id'] })

    const query = await createQueryBuilder('Favor')

    if (q.minPrice !== undefined && q.maxPrice !== undefined)
      query.andWhere('Favor.price >= :minPrice AND Favor.price <= :maxPrice', {
        minPrice: q.minPrice,
        maxPrice: q.maxPrice,
      })
    if (q.status !== undefined)
      query.andWhere('Favor.status = :status', { status: q.status })
    if (q.public !== undefined)
      query.andWhere('Favor.public = :public', { public: q.public })
    if (q.foodTask !== undefined)
      query.andWhere('Favor.food_task = :foodTask', { foodTask: q.foodTask })

    if (q.groceryTask !== undefined)
      query.andWhere('Favor.grocery_task = :groceryTask', {
        groceryTask: q.groceryTask,
      })
    if (q.laundryTask !== undefined)
      query.andWhere('Favor.laundry_task = :laundryTask', {
        laundryTask: q.laundryTask,
      })

    query.innerJoinAndSelect('Favor.client_id', 'User')
    query.orderBy('Favor.created_at', 'DESC')
    query.skip(q.pageSize * (q.pageNumber - 1))
    query.take(q.pageSize)

    const data = query.getMany()

    return data
  }

  @Mutation(() => Boolean)
  async createFavor(@Ctx() ctx: MyContext, @Arg('input') d: CreateFavorInput) {
    const uid = getUserId(ctx)

    const user = await User.findOne({ uid })
    console.log(user)
    if (!user) return false

    let favor = null
    try {
      favor = await Favor.insert({
        client_id: user,
        title: d.title,
        description: d.description,
        price: d.price,
        status: d.status,
        finish_by: d.finish_by,
        image_url: d.image_url,
        public: d.public,
        food_task: d.food_task,
        grocery_task: d.grocery_task,
        laundry_task: d.laundry_task,
      })
    } catch (err) {
      console.error(err)
      return false
    }

    return true
  }

  @Mutation(() => Boolean)
  updateFavor(@Arg('input') d: UpdateFavorInput) {
    Favor.update(
      { uuid: d.uuid },
      {
        ...d,
      }
    )

    return true
  }
}
