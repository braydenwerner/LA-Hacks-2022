import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import { client } from '../utils/createApolloClient'
import { useCreateFavorMutation } from '../generated/graphql'
import { useRouter } from 'next/router'

const CreateFavorPage: NextPage = () => {
  const titleRef = useRef<any>(null)
  const priceRef = useRef<any>(null)
  const descriptionRef = useRef<any>(null)
  const deadlineRef = useRef<any>(null)
  const foodRef = useRef<any>(null)
  const groceryRef = useRef<any>(null)
  const laundryRef = useRef<any>(null)

  const [createFavor] = useCreateFavorMutation()

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    function isNumeric(num: any) {
      return !isNaN(num)
    }

    if (
      titleRef?.current.value &&
      priceRef?.current.value &&
      descriptionRef?.current.value &&
      deadlineRef?.current.value &&
      foodRef?.current &&
      groceryRef?.current &&
      laundryRef?.current &&
      titleRef.current.value.length >= 1 &&
      descriptionRef.current.value.length >= 1 &&
      isNumeric(priceRef.current.value) &&
      parseFloat(priceRef.current.value) > 0
    ) {
      const res: any = await createFavor({
        variables: {
          input: {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            food_task: foodRef.current.checked,
            grocery_task: groceryRef.current.checked,
            laundry_task: laundryRef.current.checked,
            price: parseFloat(priceRef.current.value),
            finish_by: deadlineRef.current.value,
            status: 'Incomplete',
            public: true,
          },
        },
      })
      console.log(res)
      if (res) router.push('/favors')
    }
  }

  return (
    <div>
      <Head>
        <title>Create Favor</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit}>
        <div>New Favor?</div>
        <div>What's your favor?</div>
        <input ref={titleRef}></input>
        <div>Any extra details?</div>
        <textarea ref={descriptionRef}></textarea>
        <div>What\'s it worth to you?</div>
        <input ref={priceRef}></input>
        <div>Deadline?</div>
        <input type="date" ref={deadlineRef}></input>
        <button type="submit">ask favor</button>
        <div>What tags?</div>
        <div>Food task?</div>
        <input type="checkbox" ref={foodRef} />
        <div>Grocery task</div>
        <input type="checkbox" ref={groceryRef} />
        <div>Laundry Task?</div>
        <input type="checkbox" ref={laundryRef} />
      </form>
    </div>
  )
}

export default CreateFavorPage
