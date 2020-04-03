import React, { ChangeEvent } from 'react'
import { Styled } from './style'
import { useOnScroll } from '../../customHooks'

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}
function SearchBar(props: Props): JSX.Element {
  const { handleChange, value } = props
  const scrollPos = useOnScroll()
  return (
    <Styled.SearchBar
      opacity={scrollPos < 30 ? 1 : 1 - scrollPos / 100}
      placeholder="Search..."
      value={value}
      onChange={handleChange}
    />
  )
}

export default SearchBar
