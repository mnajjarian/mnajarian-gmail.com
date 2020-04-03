import React, { useContext } from 'react'
import CircleBar from '../CircleBar'
import { DataContext } from '../../context'
import { Styled } from './style'

function Home(): JSX.Element {
  const {
    data: { students, courses },
  } = useContext(DataContext)

  return (
    <Styled.Container>
      <CircleBar
        strokeColor="teal"
        circleColor="#4AAE9B"
        number={students.length}
        text="student"
        caption="All Students in Database"
      />
      <CircleBar
        strokeColor="#dfa612"
        circleColor="#FAE042"
        number={courses.length}
        text="course"
        caption="All Courses in Database"
      />
      <div></div>
    </Styled.Container>
  )
}

export default Home
