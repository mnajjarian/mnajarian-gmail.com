import React from 'react'
import { Styled } from './style'
import { CourseType } from '../../reducer'
import Button from '../Button'

type Props = {
  course: CourseType
  button: string
  handleClick: () => void
}
function ListItem(props: Props): JSX.Element {
  const { course, handleClick, button } = props
  return (
    <Styled.ListItem>
      <p>
        {course.name}
        <span>
          ({course.startdate.replace('-', '.')}-{course.enddate.replace('-', '.')})
        </span>
        <Button handleClick={handleClick} bgColor={button === '-' ? '#d43639' : '#00aced'} text={button} />
      </p>
    </Styled.ListItem>
  )
}

export default ListItem
