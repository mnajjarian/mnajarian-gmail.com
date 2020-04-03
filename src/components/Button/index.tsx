import React from 'react'
import Styled from './style'

type Props = {
  handleClick?: () => void
  text: string
  bgColor?: string
}
function Button(props: Props): JSX.Element {
  const { handleClick, text, bgColor = '#aaa' } = props
  return (
    <Styled.Button onClick={handleClick} bgColor={bgColor}>
      {text}
    </Styled.Button>
  )
}

export default Button
