import { GetFavorInput } from '../../../generated/graphql'
import { SearchRange, SearchCheckbox } from '../../modules'
import * as Styled from './FavorSearch.styled'

interface FavorSearchProps {
  input: GetFavorInput
}

export const FavorSearch: React.FC<FavorSearchProps> = ({ input }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Styled.CheckboxWrapper>
        <SearchCheckbox
          title="Food"
          fieldName="foodTask"
          defaultValue={false}
        />
        <SearchCheckbox
          title="Groceries"
          fieldName="groceryTask"
          defaultValue={false}
        />
        <SearchCheckbox
          title="Laundry"
          fieldName="laundryTask"
          defaultValue={false}
        />
      </Styled.CheckboxWrapper>
      <SearchRange
          input={input}
          title="Price"
          fieldNames={['minPrice', 'maxPrice']}
          minValue={0}
          maxValue={50}
          minDistance={10}
        />
    </div>
  )
}
