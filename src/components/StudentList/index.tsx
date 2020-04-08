import React, { useContext, useState, ChangeEvent } from 'react'
import { DataContext } from '../../context'
import { Styled } from './style'
import Table from '../Table'
import { StudentType } from '../../reducer'
import SearchBar from '../SearchBar'

function StudentList(): JSX.Element {
  const [state, setState] = useState('')
  const {
    data: { students },
  } = useContext(DataContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setState(e.target.value)

  const sortByName = students.sort((a: StudentType, b: StudentType) => a.name.localeCompare(b.name))

  const studentList = sortByName.filter((f) => f.name.toLowerCase().startsWith(state.toLowerCase()))
  const properties = ['index', 'name', 'address', 'email', 'phone', 'birthday']
  return (
    <Styled.Container>
      <Styled.Title>students</Styled.Title>
      <Styled.Main>
        <SearchBar value={state} handleChange={handleChange} />
        {studentList.length < 1 ? (
          <Styled.Title>nothing found</Styled.Title>
        ) : (
          <Table items={studentList} properties={properties} />
        )}
      </Styled.Main>
    </Styled.Container>
  )
}

export default StudentList
