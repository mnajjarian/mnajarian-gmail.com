import React, { useState, ChangeEvent, FormEvent, useContext } from 'react'
import { Styled } from './style'
import { DataContext } from '../../context'
import Button from '../Button'
import { useHistory } from 'react-router-dom'
import { generateId } from '../../Helper'

type CourseState = {
  name: string
  startdate: string
  enddate: string
}
function CourseForm(): JSX.Element {
  const [errMsg, setErrMsg] = useState<null | string>(null)
  const {
    data,
    data: { courses },
    dataService,
  } = useContext(DataContext)
  const {
    push,
    location: { pathname },
  } = useHistory()
  const matchId = pathname.match(/\d+/g)
  const course = courses.filter((course) => course.id === Number(matchId))[0]

  const [state, setState] = useState<CourseState>({
    name: course ? course.name : '',
    startdate: course ? course.startdate : '',
    enddate: course ? course.enddate : '',
  })

  const { name, startdate, enddate } = state

  const validateCourse = courses.find((course) => course.name === name) === undefined
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value,
    })
  }
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    const courseId = generateId(courses)

    try {
      if (course !== undefined) {
        await dataService.updateCourse({ ...state, id: course.id })
      } else {
        if (!validateCourse) {
          setErrMsg('This name is already used!')
          setTimeout(() => {
            setErrMsg(null)
          }, 5000)
          return
        }
        await dataService.addCourse({ ...state, id: courseId })
      }
      push('/courses')
    } catch (error) {
      console.log(error)
    }
  }
  const handleFocus = (e: ChangeEvent<HTMLInputElement>): string => (e.target.type = 'date')
  const handleBlur = (e: ChangeEvent<HTMLInputElement>): string => (e.target.type = 'text')

  return (
    <Styled.Container>
      {errMsg && <Styled.Error>{errMsg}</Styled.Error>}
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.FormGroup>
          <Styled.Label htmlFor="name">name</Styled.Label>
          <Styled.Input
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
            borderColor={!validateCourse ? 'red' : 'transparent'}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="startdate">start</Styled.Label>
          <Styled.Input
            type="text"
            placeholder="start date"
            name="startdate"
            value={startdate}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="enddate">end</Styled.Label>
          <Styled.Input
            type="text"
            name="enddate"
            placeholder="end date"
            value={enddate}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </Styled.FormGroup>
        <Button text="save" bgColor="#aaa" />
      </Styled.Form>
    </Styled.Container>
  )
}

export default CourseForm
