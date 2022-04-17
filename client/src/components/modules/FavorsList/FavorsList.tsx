import {useRouter} from 'next/router'
import { Favor } from '../../../generated/graphql'

interface FavorsListProps {
  favorsData: Favor[]
}

export const FavorsList: React.FC<FavorsListProps> = ({ favorsData }) => {
    console.log(favorsData)
    const router = useRouter()
  return (
    <div>
        {favorsData.map((favor, i) => (
            <div key={i} onClick={() => router.push('/favors/' + favor.uuid + '')}>
                <div> {favor.uuid} </div>
                <div>{favor.title}</div>
                <div>{favor.description}</div>
                <div>{favor.price}</div>
            </div>
        ))}
    </div>
  )
}
