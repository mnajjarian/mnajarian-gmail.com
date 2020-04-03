import React, { useContext } from 'react'
import { DataContext } from '../../context'
import { Styled } from './styled'
import { useHistory, Link } from 'react-router-dom'
import { formatDate } from '../../Helper'
import Button from '../Button'

function Course(): JSX.Element {
  const {
    data: { courses, students },
    dataService,
  } = useContext(DataContext)
  const {
    location: { pathname },
    push,
  } = useHistory()

  const matchId = pathname.match(/\d+/g)
  const course = courses.filter((course) => course.id === Number(matchId))[0]
  const handleDelete = async (): Promise<void> => {
    try {
      await dataService.removeCourse(course.id)
      push('/courses')
    } catch (error) {
      console.log(error)
    }
  }
  const studentsList = students.filter((student) => student.courses.includes(course.id))

  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Header>
          <Styled.Title>{course.name}</Styled.Title>
        </Styled.Header>
        <Styled.Line />
        <Styled.Row>
          <Styled.Label>start date:</Styled.Label>
          <Styled.Col>{formatDate(course.startdate)}</Styled.Col>
        </Styled.Row>
        <Styled.Row>
          <Styled.Label>end date:</Styled.Label>
          <p>{formatDate(course.enddate)}</p>
        </Styled.Row>
        <Styled.Row>
          <Styled.Col>
            <Button text="delete" bgColor="#d43639" handleClick={handleDelete} />
            <a href={`/courses/${course.id}/edit`}>
              <Button text="edit" bgColor="#9b9b9b" />
            </a>
          </Styled.Col>
        </Styled.Row>
      </Styled.Card>
      {studentsList.length > 0 && (
        <Styled.Card>
          <Styled.Header>
            <Styled.Title>students</Styled.Title>
          </Styled.Header>
          <Styled.Line />
          {studentsList.map((student) => (
            <>
              <Styled.Row>
                <Link to={`/students/${student.id}/${student.name.split(' ').join('-')}`}>{student.name}</Link>
              </Styled.Row>
            </>
          ))}
        </Styled.Card>
      )}
    </Styled.Container>
  )
}

export default Course
