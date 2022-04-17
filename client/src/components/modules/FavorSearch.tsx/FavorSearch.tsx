import { useState } from 'react'
import { GetFavorInput } from '../../../generated/graphql'
import { SearchRange, SearchCheckbox } from '../../modules'
import * as Styled from './FavorSearch.styled'

interface FavorSearchProps {
  input: GetFavorInput
}

export const FavorSearch: React.FC<FavorSearchProps> = ({ input }) => {
  const [selectMode, setSelectMode] = useState('friends')

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Styled.Selector>
        <Styled.SelectorText selected={selectMode === 'friends'} onClick={() => setSelectMode('friends')}>
          friends
        </Styled.SelectorText>
        <Styled.SelectorText selected={selectMode === 'local'} onClick={() => setSelectMode('local')}>
          local
      </Styled.SelectorText>
      </Styled.Selector>
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
