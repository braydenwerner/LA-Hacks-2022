import { useRouter } from 'next/router'

import { PropertyCheckbox } from '../../elements'

interface SearchCheckboxProps {
  title: string
  fieldName: string
  defaultValue: boolean
}

export const SearchCheckbox: React.FC<SearchCheckboxProps> = ({
  title,
  fieldName,
  defaultValue,
}) => {
  const router = useRouter()

  const handleCheckboxSubmit = (value: boolean) => {
    if (value === defaultValue) {
      delete router.query[fieldName]
      router.push({
        pathname: '/favors',
        query: { ...router.query },
      })
    } else {
      router.push({
        pathname: '/favors',
        query: {
          ...router.query,
          [fieldName]: value,
        },
      })
    }
  }

  return (
    <div>
      <div>{title}</div>
      <PropertyCheckbox
        defaultValue={defaultValue}
        handleCheckboxSubmit={handleCheckboxSubmit}
      />
    </div>
  )
}
