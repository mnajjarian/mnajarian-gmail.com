/* eslint-disable quotes */
import React, { useState, useContext } from 'react'
import { Styled } from './style'
import { CourseType } from '../../reducer'
import ListItem from '../ListItem'
import { DataContext } from '../../context'

type Props = {
  courseList: CourseType[]
  handleDeleteCourse: (id: number) => () => Promise<void | null>
  handleAddCourse: (id: number) => () => Promise<void | null>
}
function StudentCourse(props: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const {
    data: { courses },
  } = useContext(DataContext)

  const toggle = (): void => setIsOpen(!isOpen)

  const { courseList, handleDeleteCourse, handleAddCourse } = props
  return (
    <Styled.List>
      <Styled.ListItem>
        <Styled.Title>courses</Styled.Title>

        {courseList.length < 1 && "you don't have any course!"}
      </Styled.ListItem>
      {courseList.map((course) => (
        <ListItem key={course.id} button="-" course={course} handleClick={handleDeleteCourse(course.id)} />
      ))}
      <Styled.Tab onClick={toggle}>all courses {!isOpen ? <>&darr;</> : <>&uarr;</>}</Styled.Tab>
      {isOpen &&
        courses.map((course) => (
          <ListItem key={course.id} button="+" course={course} handleClick={handleAddCourse(course.id)} />
        ))}
    </Styled.List>
  )
}

export default StudentCourse
