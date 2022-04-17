import { GetFavorInput } from '../../../generated/graphql'
import { SearchRange, SearchCheckbox } from '../../modules'

interface FavorSearchProps {
  input: GetFavorInput
}

export const FavorSearch: React.FC<FavorSearchProps> = ({ input }) => {
  return (
    <div>
      <SearchRange
        input={input}
        title="Price"
        fieldNames={['minPrice', 'maxPrice']}
        minValue={0}
        maxValue={500}
        minDistance={10}
      />
      <SearchCheckbox
        title="Food Task"
        fieldName="foodTask"
        defaultValue={false}
      />
      <SearchCheckbox
        title="groceryTask"
        fieldName="groceryTask"
        defaultValue={false}
      />
      <SearchCheckbox
        title="laundryTask"
        fieldName="laundryTask"
        defaultValue={false}
      />
    </div>
  )
}
