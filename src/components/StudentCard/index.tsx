import React from 'react'
import { Styled } from './style'
import { StudentType } from '../../reducer'
import Button from '../Button'

type Props = {
  student: StudentType
  pathname: string
  handleDelete: (id: number) => () => void
}
function StudentCard(props: Props): JSX.Element {
  const { student, pathname, handleDelete } = props
  return (
    <Styled.Card>
      <Styled.Header>
        <Styled.Title>
          {student.name}({student.birthday})
        </Styled.Title>
      </Styled.Header>
      <Styled.Line />
      <Styled.Row>
        <Styled.Label>Address:</Styled.Label>
        <Styled.Col> {student.address}</Styled.Col>
      </Styled.Row>
      <Styled.Row>
        <Styled.Label>phone:</Styled.Label>
        <Styled.Col>{student.phone}</Styled.Col>
      </Styled.Row>
      <Styled.Row>
        <Styled.Label>email:</Styled.Label>
        <Styled.Col>{student.email}</Styled.Col>
      </Styled.Row>
      <Styled.Row>
        <Styled.Col>
          <a href={`${pathname}/edit`}>
            <Button bgColor="#4CAF50" text="edit" />
          </a>
        </Styled.Col>
        <Styled.Col>
          <Button handleClick={handleDelete(student.id)} text="delete" bgColor="#F44336" />
        </Styled.Col>
      </Styled.Row>
    </Styled.Card>
  )
}

export default StudentCard
