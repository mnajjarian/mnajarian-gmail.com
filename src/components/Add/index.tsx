import React, { useState } from 'react'
import { Styled } from './style'
import CourseForm from '../CourseForm'
import StudentForm from '../StudentForm'

type State = {
  [key: string]: boolean
}
function Add(): JSX.Element {
  const [state, setState] = useState<State>({
    tabA: true,
    tabB: false,
  })

  const toggleActive = (tab: string) => (): void => {
    if (state[tab]) {
      return
    }
    setState({
      tabA: state.tabB,
      tabB: state.tabA,
    })
  }

  const { tabA, tabB } = state
  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.Tab>
          <Styled.Item opacity={tabA ? 1 : 0.5} onClick={toggleActive('tabA')}>
            <Styled.Link>add student</Styled.Link>
          </Styled.Item>
          <Styled.Item opacity={tabB ? 1 : 0.5} onClick={toggleActive('tabB')}>
            <Styled.Link>add course</Styled.Link>
          </Styled.Item>
        </Styled.Tab>
        <Styled.TabContent display={tabA ? 'block' : 'none'}>
          <StudentForm />
        </Styled.TabContent>
        <Styled.TabContent display={tabB ? 'block' : 'none'}>
          <CourseForm />
        </Styled.TabContent>
      </Styled.Main>
    </Styled.Container>
  )
}

export default Add
