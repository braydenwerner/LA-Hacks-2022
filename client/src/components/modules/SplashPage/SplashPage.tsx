import styles from './SplashPage.module.css'
import Image from 'next/image' 
import { useRouter } from 'next/router'

export const SplashPage: React.FC = () => {
  const router = useRouter()
    return (
        <div className={styles.wrapper}>
            <Image src='/splash.png' width={414} height={896}/>
            <button className={styles.splashbutton} onClick={() => router.push('/favors')}></button>
        </div>
    )
}
