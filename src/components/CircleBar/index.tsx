import React, { useState, useEffect } from 'react'
import { Styled } from './style'

type Props = {
  strokeColor?: string
  number: number
  text?: string
  caption?: string
  circleColor?: string
}
function CircleBar(props: Props): JSX.Element {
  const [counter, setCounter] = useState(0)

  const { strokeColor = 'teal', number, text, caption, circleColor = 'transparent' } = props

  const updateCounter = (): void => {
    setTimeout(() => {
      setCounter(counter + 1)
    }, 20)
  }
  useEffect(() => {
    if (number > 0) updateCounter()
  }, [number])

  useEffect(() => {
    if (counter < number) updateCounter()
  }, [counter])

  const circleConfig = {
    viewBox: '0 0 38 38',
    x: '19',
    y: '19',
    radio: '15.91549430918954',
  }

  return (
    <Styled.Figure>
      <Styled.SVG viewBox={circleConfig.viewBox}>
        <Styled.Circle
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill={circleColor}
          stroke={strokeColor}
        />
        <Styled.Group>
          <Styled.Number x="50%" y="50%">
            {counter}
          </Styled.Number>
          <Styled.Text x="50%" y="50%">
            {text}
          </Styled.Text>
        </Styled.Group>
      </Styled.SVG>
      {caption && (
        <Styled.Figcaption>
          <Styled.Bullet bullet={strokeColor} />
          <Styled.Caption>{caption}</Styled.Caption>
        </Styled.Figcaption>
      )}
    </Styled.Figure>
  )
}

export default CircleBar
