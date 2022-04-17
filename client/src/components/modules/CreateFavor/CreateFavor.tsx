import Head from 'next/head'
import { useRef } from 'react'
import { useCreateFavorMutation } from '../../../generated/graphql'
import { colorPalette } from '../../../constants/constants'
import { useRouter } from 'next/router'
import { IoArrowBack } from 'react-icons/io5'
import * as Styled from './CreateFavor.styled'
import { Navbar } from '../../modules'
import styles from './CreateFavor.module.css'

export const CreateFavor: React.FC = () => {
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
    <>
      <Navbar title={'New Favor'} titleColor={colorPalette.green} link='/favors' backButton={true} settingsButton={false}/>
      <div>
        <form className={styles.formwrapper} onSubmit={handleSubmit}>
          <div className={styles.headertext}>What's your favor?</div>
          <input className={styles.inputboxtitle} ref={titleRef}></input>
          <div className={styles.headertext}>Any extra details?</div>
          <textarea className={styles.inputboxdesc}ref={descriptionRef}></textarea>
          <div className={styles.headertext}>What's it worth to you? $$$</div>
          <input className={styles.inputboxprice}ref={priceRef}></input>
          <div className={styles.timewrapper}>
            <div>
              <div className={styles.headertext}>Deadline?</div>
              <input className={styles.inputboxdate}type="date" ref={deadlineRef}></input>
            </div>
            <div>
              <div className={styles.headertext}>By When?</div>
              <input className={styles.inputboxtime}></input>
            </div>
          </div>

          <div className={styles.headertext}>Any tags?</div>
          <div className={styles.tags}>
            <div className={styles.tagTitle}>Food</div>
            <input type="checkbox" ref={foodRef} />
          </div>
          <div className={styles.tags}>
            <div className={styles.tagTitle}>Grocery</div>
            <input type="checkbox" ref={groceryRef} />
          </div>
          <div className={styles.tags} style={{'marginBottom': '10px'}}>
            <div className={styles.tagTitle}>Laundry</div>
            <input type="checkbox" ref={laundryRef} />
          </div>
          <button className={styles.submit}type="submit">ask favor</button>
        </form>
      </div>
    </>
  )
}
