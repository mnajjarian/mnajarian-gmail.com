import React from 'react'
import { Styled } from './style'
import { formatDate } from '../../Helper'
import Button from '../Button'

type Props = {
  item: any
  handleDelete: () => void
}
function Card(props: Props): JSX.Element {
  const { item, handleDelete } = props
  return (
    <Styled.Card>
      <Styled.Header>
        <Styled.Title>{item.name}</Styled.Title>
        <Button text="delete" bgColor="red" handleClick={handleDelete} />
      </Styled.Header>
      <Styled.Line />
      <Styled.Row>
        <Styled.Col>start date:</Styled.Col>
        <Styled.Col>{formatDate(item.startdate)}</Styled.Col>
      </Styled.Row>
      <Styled.Row>
        <Styled.Col>end date:</Styled.Col>
        <p>{formatDate(item.enddate)}</p>
      </Styled.Row>
    </Styled.Card>
  )
}

export default Card
