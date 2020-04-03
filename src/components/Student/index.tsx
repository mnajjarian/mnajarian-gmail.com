import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../context'
import { CourseType, StudentType } from '../../reducer'
import { Styled } from './style'
import StudentCard from '../StudentCard'
import StudentCourse from '../StudentCourse'

function Student(): JSX.Element {
  const {
    dataService,
    data: { students, courses },
  } = useContext(DataContext)

  const {
    location: { pathname },
    push,
  } = useHistory()

  const matchId = pathname.match(/\d+/g)
  const student = students.filter((student) => student.id === Number(matchId))[0]

  const handleDelete = (id: number) => async (): Promise<void> => {
    try {
      await dataService.removeStudent(id)
      push('/students')
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteCourse = (courseId: number) => async (): Promise<void> => {
    const studentId = student.id
    try {
      await dataService.removeStudentCourse(studentId, courseId)
    } catch (error) {
      console.log(error)
    }
  }
  const handleAddCourse = (id: number) => async (): Promise<void | null> => {
    if (student.courses.includes(id)) {
      return null
    }
    const updatedStudent: StudentType = { ...student, courses: student.courses.concat(id) }

    try {
      await dataService.updateStudent(updatedStudent)
    } catch (error) {
      console.log(error)
    }
  }

  const reducer = (acc: CourseType[], curr: CourseType): CourseType[] => {
    for (let i = 0; i < student.courses.length; i++) {
      if (curr.id === student.courses[i]) {
        acc.push(curr)
      }
    }
    return acc
  }
  const courseList = courses.reduce(reducer, [])

  return (
    <Styled.Container>
      <Styled.Main>
        <StudentCard student={student} pathname={pathname} handleDelete={handleDelete} />
        <StudentCourse
          courseList={courseList}
          handleAddCourse={handleAddCourse}
          handleDeleteCourse={handleDeleteCourse}
        />
      </Styled.Main>
    </Styled.Container>
  )
}

export default Student
