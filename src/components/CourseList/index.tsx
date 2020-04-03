import React, { useContext, ChangeEvent, useState } from 'react'
import { Styled } from './style'
import { DataContext } from '../../context'
import { Link } from 'react-router-dom'
import { StudentType } from '../../reducer'
import SearchBar from '../SearchBar'

type Arrange = { [key: string]: number }

function CourseList(): JSX.Element {
  const [state, setState] = useState('')
  const {
    data: { courses, students },
  } = useContext(DataContext)
  const reducer = (acc: number[], curr: StudentType): number[] => {
    acc = [...acc, ...curr.courses]
    return acc
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setState(e.target.value)
  const allCourses = students.reduce(reducer, [])

  const arrange = (acc: Arrange, curr: number): Arrange => {
    if (!acc[curr]) {
      acc[curr] = 1
    } else {
      acc[curr] = acc[curr] + 1
    }
    return acc
  }
  const favorits = allCourses.reduce(arrange, {})

  const sortByDate = courses.sort(
    (a, b) => Math.abs(new Date(a.startdate).getTime()) - Math.abs(new Date(b.startdate).getTime()),
  )
  const courseList = sortByDate.filter((course) => course.name.toLowerCase().startsWith(state.toLowerCase()))
  return (
    <Styled.Container>
      <Styled.Title>Courses</Styled.Title>
      <Styled.Main>
        <SearchBar value={state} handleChange={handleChange} />
        {courseList.length < 1 ? (
          <Styled.Title>nothing found</Styled.Title>
        ) : (
          <Styled.Table>
            <thead>
              <tr>
                <th>index</th>
                <th>name</th>
                <th>start date</th>
                <th>end date</th>
                <th>enrolled by</th>
              </tr>
            </thead>
            <tbody>
              {courseList.map((course, index) => (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/courses/${course.id}`}>{course.name}</Link>
                  </td>
                  <td>{course.startdate}</td>
                  <td>{course.enddate}</td>
                  <td>{favorits[course.id] | 0}</td>
                </tr>
              ))}
            </tbody>
          </Styled.Table>
        )}
      </Styled.Main>
    </Styled.Container>
  )
}

export default CourseList
